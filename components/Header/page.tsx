"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [updateStyle, setUpdateStyle] = useState(false);

  const handleScroll = () => {
    const height = window.pageYOffset;
    if (height > 150) setUpdateStyle(true);
    else setUpdateStyle(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [updateStyle]);

  return (
    <header
      className={`${
        updateStyle ? "bg-blue-900" : "bg-transparent"
      } fixed top-0 left-0 right-0 z-10 text-white py-3`}
    >
      <div className="max-w-screen-lg flex items-center justify-between mx-auto">
        <div>
          <Image src={"/images/logo.png"} alt="logo" width={100} height={50} />
        </div>
        <div className="flex items-center gap-10">
          <nav className="flex">
            <Link className="p-4 hover:text-yellow-400" href="/">
              Home
            </Link>
            <Link className="p-4 hover:text-yellow-400" href="/about">
              About
            </Link>
            <Link className="p-4 hover:text-yellow-400" href="/product">
              Product
            </Link>
            <Link
              className="p-4 hover:text-yellow-400"
              href="/fishlog-quality-center"
            >
              Fishlog Quality Center
            </Link>
            <Link className="p-4 hover:text-yellow-400" href="/b2b-marketplace">
              B2B MarketPlace
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}