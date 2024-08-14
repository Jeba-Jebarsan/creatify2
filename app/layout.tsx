import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { CrispProvider } from "@/components/ui/crisp-provider";

const outfit = Outfit({ subsets: ["latin"] });

// Define metadata for the page
export const metadata: Metadata = {
  title: "Creatify",
  description: "CreatifyAI is a sophisticated AI-powered content creation tool designed to streamline and enhance the process of generating and managing various types of content. Our platform offers a range of features including email generation and rewriting, blog title and content creation, Instagram post ideas and hashtags, code generation and debugging, YouTube SEO optimization, and more. Our goal is to provide users with intuitive and powerful tools to boost their productivity and creativity.",
};

// Define the RootLayout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <CrispProvider/>
        <head>
          {/* Add favicon link */}
          <link rel="icon" href="/logo.svg" type="image/svg+xml" />
          <meta name="theme-color" content="#000000" />
        </head>
        <body className={outfit.className}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
