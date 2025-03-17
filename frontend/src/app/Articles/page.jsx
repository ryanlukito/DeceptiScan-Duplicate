"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { getCookie } from "@/utils/cookies";
import { FaPlus } from "react-icons/fa6";
import InputArticle from "@/components/InputArticle";
import ArticleCard from "@/components/ArticleCard";

const initialArticles = [
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
  const [article, setArticle] = useState(initialArticles);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await getCookie("TOKEN");
      setIsLoggedIn(!!token);
    };

    // GET Data dari Database
    // const fetchData = async () => {
    //     try {
    //       const response = await fetch("api get data");
    //       if (!response.ok) {
    //         throw new Error("Network response was not ok");
    //       }
    //       const result = response.json();
    //       setArticle(result);
    //     } catch (error) {
    //       console.error("Error fetching data:", error);
    //     }
    //   };
    //   fetchData();
    checkLoginStatus();
  }, []);

  const handleAddArticle = (newArticle) => {
    setArticle([...article, newArticle]);
    setIsClick(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-700 via-white to-white">
      <Navbar />
      <div className="p-[4vw] grid grid-cols-4 gap-y-[2vw]">
        {article.map((article, index) => (
          <ArticleCard article={article} key={index}></ArticleCard>
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
          <InputArticle
            onClose={() => setIsClick(false)}
            onSubmit={handleAddArticle}
          ></InputArticle>
        )}
      </div>
    </div>
  );
};

export default Articles;