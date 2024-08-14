import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        A dedicated and skilled Computer Science and Engineering student from Jyothy Institute of Technology, Bengaluru. With a strong foundation in programming languages such as C and C++, the focus has expanded to include modern web technologies like HTML, CSS, JavaScript, and various JavaScript frameworks including ReactJs, ReduxJs, and NextJs. 
        </p>

        <br />

        <p className="text-xl">
        Proficient in backend development using NodeJs and ExpressJs, and experienced in managing databases with MongoDB. The technological expertise also extends to version control with Git, and the use of development tools such as VS Code and Eclipse. Driven by a passion for technology and innovation, there is a continuous commitment to improving skills and contributing to impactful projects that solve real-world problems.
        </p>
      </div>
    </div>
  );
};

export default About;