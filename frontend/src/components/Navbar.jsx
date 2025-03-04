"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
  { href: "/", label: "Home" },
  { href: "/SpamCheck", label: "Spam Check" },
  { href: "/PhishingCheck", label: "Phishing Check" },
  { href: "/Articles", label: "Articles" },
];

const Navbar = () => {
  const pathName = usePathname();

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
        {pages.map((page, index) => (
          <Link
            key={index}
            href={page.href}
            className={`hover:underline ${
              pathName === page.href ? "underline" : ""
            }`}
          >
            {page.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
