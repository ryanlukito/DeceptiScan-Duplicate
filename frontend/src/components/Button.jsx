import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-teal-600 text-white px-6 py-2 rounded-md mt-4 hover:bg-teal-700 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
