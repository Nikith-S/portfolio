import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        
        {/* Container for Text and Animation */}
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight typing-animation">
            Hi, I'm Nikith <br /> a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-2 max-w-md">
            Passionate MERN stack developer from India, currently pursuing a Bachelor's in Computer Science Engineering. I enjoy creating dynamic and responsive web applications and continuously enhancing my full-stack development skills.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* Container for Image */}
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-[127%] h-[375px] object-cover md:w-[127%] md:h-[375px]"
          />
        </div>

      </div>
    </div>
  );
};

export default Home;
