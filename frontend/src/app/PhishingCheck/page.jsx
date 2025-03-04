import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const PhisingCheck = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-700 via-white to-white relative">
      <Navbar />
      <div className="px-4">
        <h1 className="text-[45px] font-poppins mt-[2vw]">
          Check for phishing text messages here!
        </h1>
        <form action="" className="flex flex-col mt-[2vw]">
          <textarea
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
      </div>
      <Image
        src="/CyberShield.png"
        width={10000}
        height={10000}
        alt="logo"
        className="w-[490px] h-[430px] absolute right-5 bottom-1/6"
      />
    </div>
  );
};

export default PhisingCheck;
