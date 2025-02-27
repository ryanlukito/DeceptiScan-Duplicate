import React from "react";
import Navbar from "@/components/Navbar";
import LoginCard from "@/components/LoginCard";

export default function LoginPage () {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-700 via-white to-white">
      <Navbar />
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img src="/Protection.png" alt="Security Shield" className="max-w-full" />
        </div>
        <div className="md:w-1/2 flex justify-center">
          <LoginCard />
        </div>
      </div>
    </div>
  );
};
