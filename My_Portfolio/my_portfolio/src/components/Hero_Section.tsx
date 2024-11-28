"use client";
import Typical from "react-typical";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-r from-blue-500 via-purple-600 to-blue-600 text-white pt-40 pb-32 h-auto"
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 blur-sm"></div>
      <div className="relative max-w-7xl mx-auto text-center">
        <h1 className="text-5xl lg:text-7xl font-extrabold leading-tigh">
          Hello, I&apos;m{" "}
          <span className="text-yellow-300">
            <Typical
              steps={[
                " ", 500,
                "A", 300,
                "An", 300,
                "Ane", 300,
                "Anee", 300,
                "Aneeq", 1000, 
              ]}
              loop={Infinity} 
              wrapper="span"
            />
          </span>
        </h1>
        
        <p className="mt-6 text-lg lg:text-2xl leading-relaxed text-gray-200">
          Learning in a progressive and skill-focused environment, I&apos;m a passionate{" "}
          <span className="font-semibold text-yellow-300">Frontend Developer</span> and{" "}
          <span className="font-semibold text-yellow-300">UI/UX Designer</span>, driven to craft modern,
          elegant, and impactful digital experiences.
        </p>

        <div className="mt-10 space-x-4">
          <Link
            href="/Project"
            className="px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-lg shadow-lg hover:bg-yellow-500 hover:shadow-xl transition"
          >
            View Projects
          </Link>
          <Link
            href="/Contact"
            className="px-8 py-4 bg-gray-900 font-bold rounded-lg shadow-lg hover:bg-gray-800 hover:shadow-xl transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
