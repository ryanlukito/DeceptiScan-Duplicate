'use client';
import Navbar from "@/components/Navbar";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCookie, removeCookie } from "@/utils/cookies";
import useAuthRedirect from "@/hooks/useAuthRedirect";
import Loading from "@/components/Loading";

export default function Page() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await getCookie("TOKEN");
      setIsLoggedIn(!!token);
      setLoading(false);
    };
    checkLoginStatus();
  }, []);

  const handleLogout = async () => {
    await removeCookie("TOKEN");
    setIsLoggedIn(false);
    alert("You have been logged out.");
    router.push("/");
  };

  if (loading) {
    return <Loading/>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-700 via-white to-white">
      <Navbar />
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img src="/Marketing.png" alt="Email Security" className="max-w-full" />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-teal-800 mb-10 text-center">DeceptiScan</h1>
          <p className="text-2xl text-gray-700 mb-20 text-center">
            DeceptiScan is a web-based tool that helps you spot spam and phishing messages with ease. 
            Just enter any text or email, and our system will analyze it to determine if it’s spam or a phishing attempt. 
            Plus, we’ve got helpful articles to keep you informed on how to stay safe from online scams.
          </p>
          <p className="text-xl text-gray-700 font-semibold text-center">
            {isLoggedIn ? (
              <>
                Already logged in, <button onClick={handleLogout} className="font-bold text-black underline hover:text-teal-700 cursor-pointer">Logout?</button>
              </>
            ) : ( 
              <>
                <a href="/login" className="font-bold text-black underline mr-1 hover:text-teal-700">Login Here</a> if you’re Admin
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}