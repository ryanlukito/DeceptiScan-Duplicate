import React from "react";
import Button from "./Button";

const LoginCard = () => {
  return (
    <div className="flex flex-col bg-[#E7FDFF] shadow-lg rounded-xl p-7 max-w-sm text-center">
      <div className="flex flex-col items-center">
        <img src="/User.png" alt="Admin" className="w-12 h-12 mb-2" />
        <h2 className="text-teal-700 font-bold text-xl mb-4">Admin</h2>
      </div>
      <form className="space-y-4">
        <input type="text" placeholder="Username" required className="w-full border-b-2 p-2 text-gray-700 outline-none" />
        <input type="password" placeholder="Password" required className="w-full border-b-2 p-2 text-gray-700 outline-none" />
        <Button>Login</Button>
      </form>
    </div>
  );
};

export default LoginCard;
