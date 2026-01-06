import React from "react";
import Header from "../Components/Header";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGit,
  FaGithub,
  FaNpm,
} from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";

const Homepage = () => {
  return (
    <div
      className="relative min-h-screen text-gray-900 bg-white"
      style={{
        backgroundImage: `  repeating-linear-gradient(0deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 28px),  repeating-linear-gradient(90deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 28px),  radial-gradient(circle at center, rgba(0,0,0,0.03), transparent 30%)`,
      }}
    >
      <Header />
      <div className="pt-28 max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row sm:flex-row md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1 text-center md:text-left">
            <div
              data-aos="fade-right"
              className="flex items-center justify-center md:justify-start gap-3 mb-4"
            >
              <div className="h-14 w-1.5 bg-blue-600 shadow-xl rounded-full" />

              <h1 className="font-bold text-4xl md:text-5xl leading-tight font-[cursive]">
                Welcome to my{" "}
                <span className="text-blue-600 text-5xl md:text-6xl">
                  Portfolio
                </span>
              </h1>
            </div>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-lg leading-relaxed md:text-xl text-gray-900 max-w-xl mx-auto md:mx-0 md:ml-2"
            >
              My name is{" "}
              <span className="ml-1 font-semibold">Ademuyiwa Obaloluwa</span>.
              I'm a Front-End Developer who enjoys creating clean and
              easy-to-use websites. I like bringing ideas to life on the screen
              and I’m always learning new things to improve my work.
            </p>
          </div>

          <div className="flex-1 flex justify-center">
            <img
              data-aos="zoom-in"
              src="image1.png"
              alt="profile"
              className="w-64 h-64 md:w-[365px] md:h-[365px] object-cover rounded-3xl ml-5 mb-10 shadow-2xl"
            />
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            My <span className="text-blue-600">Skills</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                name: "HTML5",
                borderColor: "border-orange-500",
                iconColor: "text-orange-500",
                icon: FaHtml5,
              },
              {
                name: "CSS3",
                borderColor: "border-blue-500",
                iconColor: "text-blue-500",
                icon: FaCss3Alt,
              },
              {
                name: "JavaScript",
                borderColor: "border-yellow-500",
                iconColor: "text-yellow-500",
                icon: FaJs,
              },
              {
                name: "React",
                borderColor: "border-cyan-500",
                iconColor: "text-cyan-500",
                icon: FaReact,
              },
              {
                name: "Tailwind",
                borderColor: "border-sky-500",
                iconColor: "text-sky-500",
                icon: SiTailwindcss,
              },
              {
                name: "Git",
                borderColor: "border-red-600",
                iconColor: "text-red-600",
                icon: FaGit,
              },
              {
                name: "GitHub",
                borderColor: "border-gray-800",
                iconColor: "text-gray-800",
                icon: FaGithub,
              },
              {
                name: "Vite",
                borderColor: "border-purple-600",
                iconColor: "text-purple-600",
                icon: SiVite,
              },
              {
                name: "NPM",
                borderColor: "border-red-700",
                iconColor: "text-red-700",
                icon: FaNpm,
              },
            ].map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 50}
                  className={`border-2 ${skill.borderColor} bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center gap-4 cursor-pointer`}
                >
                  <IconComponent
                    className={`text-5xl md:text-6xl ${skill.iconColor}`}
                  />
                  <p className="text-center font-semibold text-gray-900 text-sm md:text-base">
                    {skill.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
