import React from "react";
import ecommerce from "../assets/portfolio/Ecommerce.png";
import chatapp from "../assets/portfolio/chatApp.png";
import eraser from "../assets/portfolio/eraser.jpeg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ecommerce,
      codeLink: "https://github.com/Nikith-S/mern_E-commerce_app",
    },
    {
      id: 2,
      src: chatapp,
      codeLink: "https://github.com/Nikith-S/Chat_App",
    },
    {
      id: 3,
      src: eraser,
      codeLink: "https://github.com/Nikith-S/eraser.io",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-full h-48 object-cover"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => {
                    window.location.href = codeLink;
                  }}
                >
                  Code
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 cursor-default"
                >
                  Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
