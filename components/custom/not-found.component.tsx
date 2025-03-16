"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function NotFoundContainerComponent() {
  const [css, setCss] = useState('opacity-0');
  const [css2, setCss2] = useState('scale-0');

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

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="hidden sm:block sm:absolute top-0 left-4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
      <div className="hidden sm:block sm:absolute top-0 right-4 w-72 h-72 bg-green-600 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
      <div className="hidden sm:block sm:absolute bottom-20 left-60 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
      <div className={`relative py-3 sm:max-w-xl sm:mx-auto transition-transform ${css2}`}>
        <div className={`absolute inset-0 bg-gradient-to-r from-green-300 to-green-600 shadow-lg transition-all ${css} sm:rounded-3xl`}></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">


            <h1 className="text-4xl font-bold text-center mb-4">404</h1>
            <h2 className="text-xl font-bold text-center mb-4">Page not found</h2>

            <p className="text-black mt-4 px-14 text-justify">
              Page youre looking for cannot be found or have been moved
            </p>
            <div className="m-4 mt-16 text-center">
              <Link href="/">
                <button className="bg-green-600 text-white px-6 py-3 rounded text-lg shadow hover:bg-green-700 transition">
                  Back to Home
                </button>
              </Link>
            </div>



          </div>
        </div>
      </div>
    </div>
  );
}