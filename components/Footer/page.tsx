import Button from "../Button/page";
import Link from "next/link";
import { FiFacebook, FiLinkedin, FiInstagram } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-blue-900 md:p-16 p-6 text-white">
      <div className="md:flex flex flex-col md:flex-row mb-10 gap-6 justify-between">
        <h1 className="text-4xl flex-1">
          Join us and be a part of building thre fisheries ecosystem in
          indonesia!
        </h1>
        <div className="flex-1">
          <div className="flex md:justify-end gap-4">
            <Button title="Buyer" />
            <Button title="Suppliers" />
          </div>
        </div>
      </div>
      <div className="md:flex flex flex-col md:flex-row justify-between md:gap-0 gap-6">
        <div>
          <h3 className="font-semibold text-lg">PT. Rantai Pasok Teknologi</h3>
          <p>Aviso Office, Epicentrum Walk, Lt 3 A306-307,</p>
          <p>Setiabudi, Jakarta Selatan,</p>
          <p>Telp. 0251 8579380</p>
        </div>
        <div className="flex md:flex-row flex-col gap-8">
          <figure className="flex flex-col">
            <h3 className="font-semibold">Partnership</h3>
            <Link className="text-sm" href="/">
              Buyer
            </Link>
            <Link className="text-sm" href="/">
              Seller
            </Link>
          </figure>
          <figure className="flex flex-col">
            <h3 className="font-semibold">Fishlog</h3>
            <Link className="text-sm" href="/">
              Technology
            </Link>
          </figure>
          <figure className="flex flex-col">
            <h3 className="font-semibold">Company</h3>
            <Link className="text-sm" href="/">
              About Us
            </Link>
            <Link className="text-sm" href="/">
              Privacy Policy
            </Link>
            <Link className="text-sm" href="/">
              Blog
            </Link>
            <Link className="text-sm" href="/">
              Career
            </Link>
          </figure>
        </div>
      </div>
      <div className="flex justify-between items-center border-t-2 border-t-white mt-8">
        <figure>
          &copy;{`${new Date().getFullYear()} fishlog All rights reserved`}{" "}
        </figure>
        <figure>
          <p>Find Us On</p>
          <div className="flex items-center gap-2">
            <Link href={"/"}>
              <FiFacebook />
            </Link>
            <Link href={"/"}>
              <FiLinkedin />
            </Link>
            <Link href={"/"}>
              <FiInstagram />
            </Link>
          </div>
        </figure>
      </div>
    </footer>
  );
}
