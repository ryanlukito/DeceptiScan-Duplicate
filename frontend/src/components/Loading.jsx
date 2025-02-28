import React, { useState, useEffect } from "react";

const Loading = () => {
  const messages = ["Loading data", "Fetching information", "Please wait a moment"];
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prevMessage) => (prevMessage + 1) % messages.length);
    }, 1000); // Change message every 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      {/* Title Text */}
      <h1 className="text-2xl font-bold text-teal-700 mb-2">DeceptiScan</h1>
      <p className="text-sm text-gray-600">by B1_03</p>
      
      {/* Spinner */}
      <div className="mt-4 animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-teal-700"></div>
      
      {/* Rotating Loading Messages */}
      <p className="mt-2 text-gray-500">{messages[currentMessage]}</p>
    </div>
  );
};

export default Loading;