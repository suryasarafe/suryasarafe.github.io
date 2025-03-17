"use client";

import { Experience } from "@/lib/interface";
import { truncateText } from "@/lib/utils";
import Link from "next/link";
export default function ItemExperience(data: { item: Experience, isLeft: boolean }) {
  return (
    <Link href={`/experience/${data.item.id}`} key={data.item.id}>
      <div className={`mb-8 flex justify-between items-center w-full  ${data.isLeft ? 'flex-row-reverse left-timeline' : ''}`}>
        <div className={`w-5/12 ${data.isLeft ? 'text-left' : 'text-right'}`}>
          <p className="mb-3 text-base text-green-600">{data.item.date}</p>
        </div>
        <div className={`shadow-md rounded-xl border cursor-pointer hover:shadow-lg hover:scale-105 transition-all w-5/12 px-4 py-4 ${data.isLeft ? 'text-right' : 'text-left'}`}>
          <p className="mb-3 text-base text-green-600">{data.item.company}</p>
          <h4 className="mb-3 font-bold text-lg md:text-2xl">{data.item.position}</h4>
          <p className="text-sm md:text-base leading-snug text-gray-500 text-opacity-100">
            {truncateText(data.item.description, 120)}
          </p>
        </div>
      </div>
    </Link>
  );
}