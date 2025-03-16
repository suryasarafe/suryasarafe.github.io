"use client";

import { useEffect, useState } from "react";
import { BlogPostData } from "@/lib/utils";

export default function DetailBlogContainer({ data: { item } }: { data: { item: BlogPostData } }) {
  const [css, setCss] = useState('opacity-0');
  const [css2, setCss2] = useState('scale-0');
  const [date, setDate] = useState('');
  const [html, setHtml] = useState('');
  useEffect(() => {
    setDate(new Intl.DateTimeFormat("id-ID", { dateStyle: "long" }).format(new Date(item.published)));
    setHtml(item.content);
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
      <div className={`relative py-3 sm:w-[90%] sm:mx-auto transition-transform ${css2}`}>

        <div className={`absolute inset-0 bg-gradient-to-r from-green-300 to-green-600 shadow-lg transition-all ${css} sm:rounded-3xl`}></div>
        <div className="relative px-4 py-6 bg-white shadow-lg sm:rounded-3xl sm:p-8">
          <div className="w-full mx-auto flex justify-between mb-3">
            <p className="text-green-600 font-semibold">{date}</p>
            <p className="text-green-600 font-semibold">{item.labels}</p>
          </div>
          <div className="w-full mx-auto">
            <h1 className="text-xl font-semibold mb-3 text-gray-700">{item.title}</h1>

            <p className="text-gray-600 mt-4 text-justify" dangerouslySetInnerHTML={{ __html: html }}></p>
          </div>
        </div>
      </div>
    </div>
  );
}