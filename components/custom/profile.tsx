"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGooglePlus, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image"
import Link from "next/link";


export default function LoginContainerComponent() {
  const [css, setCss] = useState('opacity-0');
  const [css2, setCss2] = useState('scale-0');
  const [css3, setCss3] = useState('scale-0');

  useEffect(() => {
    const timer = setTimeout(() => {
      setCss('opacity-100 -skew-y-6 sm:skew-y-0 sm:-rotate-6');
    }, 500);
    const timer2 = setTimeout(() => {
      setCss2('scale-110');
    }, 100);
    const timer3 = setTimeout(() => {
      setCss2('scale-100');
    }, 500);
    const timer4 = setTimeout(() => {
      setCss3('scale-100');
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    }
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative sm:max-w-xl sm:mx-auto sm:mt-16">
        <div className={`absolute inset-0 bg-gradient-to-r from-green-300 to-green-600 shadow-lg transition-all ${css} sm:rounded-3xl`}></div>
        <div className={`relative px-4 py-8 bg-white shadow-md hover:shadow-lg sm:rounded-3xl sm:p-20 transition-all ${css2}`}>
          <div className="max-w-md mx-auto">
            <div className="flex justify-center -mt-[6rem] sm:-mt-[8rem]">
              <Image alt="Profile" src="/profile.jpeg" title="Profile"
                className={`${css3} rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 border border-white`}
                width={150}
                height={150}
              ></Image>
            </div>

            <h1 className="text-center mt-2 mb-1 text-xl text-gray-600 font-semibold">Surya A. Ramadhan</h1>
            <h2 className="text-center mb-3 text-md text-gray-600">Software Engineer from Bandung, Indonesia</h2>
            <div className="flex justify-center gap-6 mb-6">
              <a href="https://github.com/suryasarafe" target="_blank" className="flex items-center justify-center w-10 h-10 border border-gray-200 rounded-full hover:scale-110 hover:shadow-lg transition-all">
                <FontAwesomeIcon icon={faGithub} className="text-2xl text-gray-500" />
              </a>
              <a href="https://www.linkedin.com/in/suryasarafe/" target="_blank" className="flex items-center justify-center w-10 h-10 border border-gray-200 rounded-full hover:scale-110 hover:shadow-lg transition-all">
                <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-blue-500" />
              </a>
              <a href="mailto:surya.akdhan@gmail.com" target="_blank" className="flex items-center justify-center w-10 h-10 border border-gray-200 rounded-full hover:scale-110 hover:shadow-lg transition-all">
                <FontAwesomeIcon icon={faGooglePlus} className="text-2xl text-red-500" />
              </a>
            </div>

            <div className="text-center">

              <Link href="/experience" className="">
                <div className="w-48 mx-auto text-gray-400 rounded p-2 text-center shadow-md hover:shadow-lg transition-all hover:font-semibold">Working Experience</div>
              </Link>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}