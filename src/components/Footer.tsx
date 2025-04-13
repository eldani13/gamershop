"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="w-full bg-[#404040] p-16 mt-12 flex justify-center items-center">
      <button
        onClick={() => router.push("/")}
        aria-label="Go to home"
        className="hover:opacity-80 transition-opacity"
      >
        <Image
          src="/logo.png"
          alt="logo"
          width={160}
          height={40}
          priority
        />
      </button>
    </footer>
  );
}
