"use client";

import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Image from "next/image";

const InputArticle = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [preview, setPreview] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("/stock.jpg");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newArticle = {
      photo: "/stock.jpg",
      title,
      text: preview,
      link,
    };

    onSubmit(newArticle);

    // POST Data ke Database
    // try {
    //   const response = await fetch("nanti apinya di sini", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formData),
    //   });

    //   if (response.ok) {
    //     alert("Article saved successfully!");
    //     onClose();
    //   } else {
    //     alert("Failed to save article!");
    //   }
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    // }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-[rgba(0,0,0,0.85)] z-10">
      <div className="w-[62.187vw] h-[40.99vw] bg-white px-[3vw] py-[1.5vw] flex flex-col items-start justify-evenly text-black relative">
        <div>
          <h1 className="text-[#146D74] text-[2.083vw] font-bold">
            Write Your Article
          </h1>
          <p className="text-[1.25vw] mt-[0.5vw]">Add the article here</p>
          <div className="w-[56.458vw] h-[0.05vw] bg-black mt-[0.85vw]"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mt-[2vw]">
            <label className="text-[1.25vw]">Article's Title*</label>
            <input
              type="text"
              className="text-[1vw] w-[43.49vw] h-[2.448vw] px-[1vw] py-[0.2vw] rounded-[0.52vw] border-1 border-black ml-[2vw]"
              required
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mt-[2vw]">
            <label className="text-[1.25vw]">Source Link*</label>
            <input
              type="text"
              className="text-[1vw] w-[43.49vw] h-[2.448vw] px-[1vw] py-[0.2vw] rounded-[0.52vw] border-1 border-black ml-[2.3vw]"
              required
              placeholder="https://google.com"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
          <div className="mt-[2vw] flex">
            <label className="text-[1.25vw]">Preview*</label>
            <textarea
              type="text"
              className="text-[1vw] w-[43.49vw] h-[8vw] px-[1vw] py-[0.2vw] rounded-[0.52vw] border-1 border-black ml-[4.4vw]"
              required
              placeholder="Description"
              value={preview}
              onChange={(e) => setPreview(e.target.value)}
            />
          </div>
          <div className="mt-[2vw] flex">
            <label className="text-[1.25vw]">Picture*</label>
            <div className="flex items-center justify-between ml-[3.8vw]">
              <Image
                src="/uploadImage.png"
                width={10000}
                height={10000}
                alt="camera"
                className="w-[7.708vw] h-[6.927vw]"
              />
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="image-upload"
                onChange={handleImageUpload}
              />
              <label
                htmlFor="image-upload"
                className="w-[30vw] h-[6.927vw] px-[1vw] py-[0.2vw] rounded-[0.52vw] border-1 border-black ml-[6.8vw] flex items-center justify-center hover:cursor-pointer"
              >
                <span className="text-[#146D74] mr-[0.4vw]">Click</span>to
                upload JPG or JPEG
              </label>
            </div>
          </div>
          <div className="flex mt-[2vw] ml-[9vw]">
            <button
              type="submit"
              className="w-[7.865vw] h-[2.292vw] text-[1.25vw] bg-[#146D74] rounded-[0.26vw] text-white hover:bg-[#106167] active:bg-[#0F565B] transition ease-out-300"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-[7.865vw] h-[2.292vw] text-[1.25vw] border-1 border-black rounded-[0.26vw] ml-[1vw] bg-white hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </form>
        <button onClick={onClose} className="absolute right-[1vw] top-[1vw]">
          <IoMdCloseCircleOutline className="text-[3vw] text-red-600 hover:text-red-700 active:text-red-800" />
        </button>
      </div>
    </div>
  );
};

export default InputArticle;