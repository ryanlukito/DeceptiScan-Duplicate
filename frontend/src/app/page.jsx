import Navbar from "@/components/Navbar"
import React from 'react'

export default function page() {
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
          <p className="text-xl text-gray-700 font-semibold  text-center">
            <a href="/login" className="font-bold text-black underline">Login Here</a> if you’re Admin
          </p>
        </div>
      </div>
    </div>
  )
}
