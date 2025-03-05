"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";

const SpamCheck = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/predict/predict_spam", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    const data = await response.json();
    setResult(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-700 via-white to-white relative">
      <Navbar />
      <div className="px-4">
        <h1 className="text-[45px] font-poppins mt-[2vw]">
          Check for spam text messages here!
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col mt-[2vw]">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            className="w-[1000px] h-[400px] bg-[#DEF4F6] rounded-[5px] mt-3 text-black px-3 py-2"
            placeholder="Paste the text message you got"
          />
          <button
            type="submit"
            className="w-[151px] h-[55px] bg-[#1A929A] text-[32px] mt-2 rounded-[5px] hover:bg-[#146267] hover:transition ease-in"
          >
            Check
          </button>
        </form>
        {result && (
          <div className="mt-4 p-3 bg-gray-200 rounded text-black">
            <h3 className="font-bold">Prediction Result:</h3>
            <p>{result.prediction}</p>
            <h4 className="font-bold mt-2">Details:</h4>
            <pre>{JSON.stringify(result.details, null, 2)}</pre>
          </div>
        )}
      </div>
      <Image
        src="/SpamCheck.png"
        width={10000}
        height={10000}
        alt="logo"
        className="w-[468px] h-[490px] absolute right-0 bottom-0"
      />
    </div>
  );
};

export default SpamCheck;
