import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

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
      </div>
    </div>
  );
};

export default Articles;
