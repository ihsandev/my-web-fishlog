"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiAlignJustify, FiXCircle } from "react-icons/fi";
import { usePathname } from "next/navigation";

export default function Header() {
  const [updateStyle, setUpdateStyle] = useState(false);
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  const handleScroll = () => {
    const height = window.pageYOffset;
    if (height > 150) setUpdateStyle(true);
    else setUpdateStyle(false);
  };

  useEffect(() => {
    if (pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    }
  }, [updateStyle, pathname]);

  return (
    <header
      className={`${
        pathname === "/"
          ? updateStyle
            ? "bg-blue-900"
            : "bg-transparent"
          : "bg-blue-900"
      } fixed top-0 left-0 right-0 z-10 text-white py-3`}
    >
      <div className="max-w-screen-lg flex items-center justify-between mx-auto md:px-0 px-6">
        <div>
          <Image src={"/images/logo.png"} alt="logo" width={100} height={50} />
        </div>
        <div className="hidden md:flex items-center gap-10">
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
        <div className="md:hidden text-2xl" onClick={() => setShow(!show)}>
          {show ? <FiXCircle /> : <FiAlignJustify />}
        </div>
      </div>
      {show && (
        <div className="md:hidden items-center gap-10 bg-blue-900 mt-4">
          <nav className="flex flex-col">
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
      )}
    </header>
  );
}
