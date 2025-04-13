"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-colorHeader text-white py-4 px-24 flex justify-between items-center">
      <Link
        href="/"
        className=" text-colorTextHeader text-center"
        style={{
          fontFamily: "'Geist', sans-serif",
          fontWeight: 500,
          fontSize: "24px",
          lineHeight: "24px",
          letterSpacing: "0.4",
        }}
      >
        GamerShop
      </Link>

      <nav className="space-x-4">
        <Link href="/cart" className="hover:underline">
          <Image
            src="/carrito.png"
            alt="Carrito de compras"
            width={24}
            height={24}
          />
        </Link>
      </nav>
    </header>
  );
}
