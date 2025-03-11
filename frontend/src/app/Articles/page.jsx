"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { getCookie } from "@/utils/cookies";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";

const articles = [
  {
    photo: "/stock.jpg",
    title: "Tes Artikel",
    text: "Mungkin setiap dari kita pernah menerima email dengan konten yang aneh. Jika Anda membaca teks ini, Anda adalah pengguna internet dan mungkin memiliki akun email. Meskipun spam email telah ada sejak awal email...",
    link: "https://www.google.com",
  },
  {
    photo: "/stock.jpg",
    title: "Tes Artikel",
    text: "Mungkin setiap dari kita pernah menerima email dengan konten yang aneh. Jika Anda membaca teks ini, Anda adalah pengguna internet dan mungkin memiliki akun email. Meskipun spam email telah ada sejak awal email...",
    link: "https://www.google.com",
  },
  {
    photo: "/stock.jpg",
    title: "Tes Artikel",
    text: "Mungkin setiap dari kita pernah menerima email dengan konten yang aneh. Jika Anda membaca teks ini, Anda adalah pengguna internet dan mungkin memiliki akun email. Meskipun spam email telah ada sejak awal email...",
    link: "https://www.google.com",
  },
  {
    photo: "/stock.jpg",
    title: "Tes Artikel",
    text: "Mungkin setiap dari kita pernah menerima email dengan konten yang aneh. Jika Anda membaca teks ini, Anda adalah pengguna internet dan mungkin memiliki akun email. Meskipun spam email telah ada sejak awal email...",
    link: "https://www.google.com",
  },
  {
    photo: "/stock.jpg",
    title: "Tes Artikel",
    text: "Mungkin setiap dari kita pernah menerima email dengan konten yang aneh. Jika Anda membaca teks ini, Anda adalah pengguna internet dan mungkin memiliki akun email. Meskipun spam email telah ada sejak awal email...",
    link: "https://www.google.com",
  },
  {
    photo: "/stock.jpg",
    title: "Tes Artikel",
    text: "Mungkin setiap dari kita pernah menerima email dengan konten yang aneh. Jika Anda membaca teks ini, Anda adalah pengguna internet dan mungkin memiliki akun email. Meskipun spam email telah ada sejak awal email...",
    link: "https://www.google.com",
  },
  {
    photo: "/stock.jpg",
    title: "Tes Artikel",
    text: "Mungkin setiap dari kita pernah menerima email dengan konten yang aneh. Jika Anda membaca teks ini, Anda adalah pengguna internet dan mungkin memiliki akun email. Meskipun spam email telah ada sejak awal email...",
    link: "https://www.google.com",
  },
  {
    photo: "/stock.jpg",
    title: "Tes Artikel",
    text: "Mungkin setiap dari kita pernah menerima email dengan konten yang aneh. Jika Anda membaca teks ini, Anda adalah pengguna internet dan mungkin memiliki akun email. Meskipun spam email telah ada sejak awal email...",
    link: "https://www.google.com",
  },
];

const Articles = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await getCookie("TOKEN");
      setIsLoggedIn(!!token);
    };
    checkLoginStatus();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-700 via-white to-white">
      <Navbar />
      <div className="p-[4vw] grid grid-cols-4 gap-y-[2vw]">
        {articles.map((article, index) => (
          <div
            key={index}
            className="w-[20.365vw] h-[17.552vw] bg-[#DEF4F6] drop-shadow-md rounded-[1.042vw] text-black p-[0.7vw] flex flex-col items-center"
          >
            <Image
              src={article.photo}
              width={10000}
              height={10000}
              alt="photo"
              className="w-[18.438vw] h-[9.219vw] rounded-[1.042vw]"
            />
            <div className="mt-[0.3vw]">
              <h1 className="text-[1.25vw]">{article.title}</h1>
              <p className="text-[0.625vw] text-justify">
                {article.text}
                <a
                  href={article.link}
                  target="_blank"
                  className="text-blue-600 ml-[0.3vw]"
                >
                  Read More
                </a>
              </p>
            </div>
          </div>
        ))}
        {isLoggedIn && (
          <button
            onClick={() => setIsClick(true)}
            className="w-[4.583vw] h-[4.583vw] rounded-full font-bold bg-[#1A929A] hover:bg-[#166E74] active:bg-[#124D53] transition ease-in duration-100 flex items-center justify-center"
          >
            <FaPlus className="text-[3vw]" />
          </button>
        )}
        {isClick && (
          <div className="fixed inset-0 flex justify-center items-center bg-[rgba(0,0,0,0.85)] z-10">
            <div className="w-[75vw] h-[44.271vw] bg-white p-[3vw] flex items-center justify-evenly text-black relative">
              <button
                onClick={() => setIsClick(false)}
                className="absolute right-[1vw] top-[1vw]"
              >
                <IoMdCloseCircleOutline className="text-[3vw] text-red-600 hover:text-red-700 active:text-red-800" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Articles;
