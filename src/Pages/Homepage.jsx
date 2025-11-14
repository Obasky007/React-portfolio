import React from "react";
import Header from "../Components/Header";

const Homepage = () => {
  return (
    <div className="min-h-screen text-gray-900">
      <Header />

      <div className="pt-28 max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-10 md:gap-16">
          <div className="text-center md:text-left flex-1">
            <div className="flex justify-center items-center gap-1">
              <div className="h-14 w-1.5 bg-blue-600 shadow-2xl rounded"></div>
            <h1 className="font-bold text-3xl md:text-5xl font-[cursive] w-[700px] mb-3 leading-tight">
              Welcome to my 
              <span className="text-5xl ml-2 md:text-6xl text-blue-600">
                 Portfolio
              </span>
            </h1></div>

            <p className="text-lg md:text-xl w-[470px] md:w-[550px] text-gray-900 max-w-xl md:ml-5 text-center">
              My name is 
              <span className="ml-1 font-semibold">Ademuyiwa Obaloluwa</span>, a
              Front-End Developer focused on building clean,
              beautiful, and interactive user interfaces, with HTML5, CSS3, TailwindCSS, Javascript and React.
            </p>
          </div>

          <div className="flex-1 flex justify-center">
            <img
              src="image1.png"
              alt="profile"
              className="w-72 h-72 object-cover rounded-full shadow-xl md:w-80 md:h-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
