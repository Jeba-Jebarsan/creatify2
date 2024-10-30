import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-black via-blue-950 to-black">
      <div className="relative">
        <div className="absolute -z-10 w-full h-full blur-[100px] bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30" />
        <SignIn />
      </div>
    </div>
  );
}
