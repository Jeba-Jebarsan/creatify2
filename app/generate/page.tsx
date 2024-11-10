"use client"
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';
import { useUser } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";

const ImageGenerate = () => {
  const searchParams = useSearchParams();
  const { isSignedIn } = useUser();
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [generationCount, setGenerationCount] = useState(0);

  useEffect(() => {
    const urlPrompt = searchParams.get('prompt');
    if (urlPrompt) {
      setPrompt(decodeURIComponent(urlPrompt));
    }
  }, [searchParams]);

  const query = async (data: { inputs: string }) => {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnell",
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUGGINGFACE_API_KEY}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.blob();
    return result;
  };

  const generateImage = async () => {
    if (!prompt.trim()) {
      toast.error('Please enter a prompt');
      return;
    }

    if (!isSignedIn && generationCount >= 3) {
      toast.error('Please sign in to generate more images');
      return;
    }

    setIsGenerating(true);
    setError(null);

    try {
      const blob = await query({ inputs: prompt });
      const imageUrl = URL.createObjectURL(blob);
      setGeneratedImage(imageUrl);
      if (!isSignedIn) {
        setGenerationCount(prev => prev + 1);
      }
    } catch (err) {
      console.error('Error generating image:', err);
      setError('Failed to generate image. Please try again.');
      toast.error('Failed to generate image. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = async () => {
    if (generatedImage) {
      try {
        const response = await fetch(generatedImage);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `generated-image-${Date.now()}.png`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        toast.success('Image downloaded successfully!');
      } catch (err) {
        toast.error('Failed to download image');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-violet-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 mb-4">
            AI Image Generation
          </h1>
          <p className="text-lg text-purple-200 opacity-90">Transform your imagination into stunning visuals</p>
        </div>

        {!isSignedIn && (
          <div className="text-center mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-400/20 text-yellow-300 text-sm font-medium">
              {`✨ ${3 - generationCount} free generations remaining • Sign in for unlimited creations!`}
            </span>
          </div>
        )}

        <div className="backdrop-blur-lg bg-white/5 rounded-2xl shadow-2xl p-8 border border-purple-500/20">
          <div className="mb-8">
            <label className="block text-purple-200 text-lg font-medium mb-3">
              Describe Your Vision
            </label>
            <textarea
              className="w-full px-4 py-3 rounded-xl bg-purple-900/30 border border-purple-500/30 text-white placeholder-purple-300/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
              rows={4}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Let your creativity flow..."
            />
          </div>

          {(!isSignedIn && generationCount >= 3) ? (
            <SignInButton mode="modal">
              <button className="w-full py-4 rounded-xl text-white font-bold text-lg bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:opacity-90 transform transition duration-200 hover:scale-[1.02] shadow-lg">
                Sign in to Unlock Unlimited Creations ✨
              </button>
            </SignInButton>
          ) : (
            <button
              onClick={generateImage}
              disabled={isGenerating}
              className={`w-full py-4 rounded-xl text-white font-bold text-lg transition duration-200 ${
                isGenerating
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:opacity-90 transform hover:scale-[1.02] shadow-lg'
              }`}
            >
              {isGenerating ? 'Creating Magic...' : 'Generate Image ✨'}
            </button>
          )}
        </div>

        {isGenerating && (
          <div className="text-center mt-8">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-purple-400 border-t-transparent"></div>
            <p className="mt-4 text-xl text-purple-200">Crafting your masterpiece with AI magic...</p>
          </div>
        )}

        {error && (
          <div className="mt-8 text-center p-4 bg-red-500/20 rounded-xl border border-red-500/30">
            <p className="text-red-300">{error}</p>
          </div>
        )}

        {generatedImage && !isGenerating && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300 mb-8">
              Your Creation
            </h2>
            <div className="backdrop-blur-lg bg-white/5 rounded-2xl shadow-2xl p-6 border border-purple-500/20">
              <img
                src={generatedImage}
                alt="Generated"
                className="w-full h-auto rounded-xl shadow-2xl mb-6 transform transition duration-200 hover:scale-[1.01]"
              />
              <button
                onClick={handleDownload}
                className="w-full py-4 rounded-xl text-white font-bold text-lg bg-gradient-to-r from-blue-400 to-indigo-500 hover:opacity-90 transform transition duration-200 hover:scale-[1.02] shadow-lg"
              >
                Download Your Masterpiece 🎨
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGenerate;
