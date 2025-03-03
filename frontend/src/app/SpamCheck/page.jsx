import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const SpamCheck = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-700 via-white to-white relative">
      <Navbar />
      <div className="px-4">
        <h1 className="text-[45px] font-poppins">
          Check for spam text messages here!
        </h1>
        <form action="" className="flex flex-col">
          <input
            type="text"
            className="w-[1000px] h-[80px] bg-[#DEF4F6] rounded-[5px] text-black px-3"
            placeholder="Paste the sender"
          />
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
