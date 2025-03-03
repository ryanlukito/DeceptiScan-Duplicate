import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-b from-teal-700 to-transparent p-4 text-white flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="border-l-2 border-white pl-4">
          <h1 className="text-lg font-bold">DeceptiScan</h1>
          <p className="text-sm">
            Spam and <br /> Phishing Detector
          </p>
        </div>
      </div>
      <div className="flex space-x-6 text-lg font-semibold">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/SpamCheck" className="hover:underline">
          Spam Check
        </Link>
        <Link href="/PhishingCheck" className="hover:underline">
          Phishing Check
        </Link>
        <Link href="/Articles" className="hover:underline">
          Articles
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
