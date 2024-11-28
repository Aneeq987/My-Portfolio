import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8 max-sm:py-4">
      <div className="flex justify-between max-w-7xl mx-auto px-4 max-sm:px-2 sm:px-6 lg:px-8">
      <p className="text-center md:text-left text-sm text-gray-400">
      copyright © {new Date().getFullYear()} All Rights Reserved.
      </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://github.com/Aneeq987"
            target='_blank'
            aria-label="Shopnova on GitHub"
            className="hover:text-blue-400 transition-colors duration-200 flex items-center"
          >
            <FaGithub className="mr-2" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-aneeq-a8bb7133a"
            target='_blank'
            aria-label="Shopnova on LinkedIn"
            className="hover:text-blue-400 transition-colors duration-200 flex items-center"
          >
            <FaLinkedin className="mr-2" /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
