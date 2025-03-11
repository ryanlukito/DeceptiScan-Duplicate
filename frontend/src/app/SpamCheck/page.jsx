"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Checker from "@/components/Checker";
import Image from "next/image";

const SpamCheck = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-700 via-white to-white relative">
      <Navbar />
      <Checker
        predict_api="predict_spam"
        feedback_api="spam_feedback"
        title="spam"
        resultId="spamresultID"
      ></Checker>
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
