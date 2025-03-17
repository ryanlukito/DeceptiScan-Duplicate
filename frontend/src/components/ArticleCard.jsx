import React from "react";
import Image from "next/image";

const ArticleCard = ({ article }) => {
  return (
    <div className="w-[20.365vw] h-[17.552vw] bg-[#DEF4F6] drop-shadow-md rounded-[1.042vw] text-black p-[0.7vw] flex flex-col items-center">
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
            href={
              article.link.startsWith("https:")
                ? article.link
                :` https://${article.link}`
            }
            target="_blank"
            className="text-blue-600 ml-[0.3vw]"
          >
            Read More
          </a>
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;