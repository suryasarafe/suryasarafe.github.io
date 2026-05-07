"use client";

import { Experience } from "@/lib/interface";
import { truncateText } from "@/lib/utils";
import Link from "next/link";
export default function ItemExperience(data: { item: Experience }) {
  return (
    <Link href={`/experience/${data.item.id}`} key={data.item.id}>
      <div className={`mb-8 flex justify-between items-center w-full`}>
        <div className={`shadow-md rounded-xl border cursor-pointer hover:shadow-lg hover:scale-105 transition-all px-4 py-4`}>
          <p className="mb-1 text-base text-slate-400">{data.item.date}</p>

          <h4 className="font-bold text-green-600 text-lg md:text-2xl">
            {data.item.company}
          </h4>
          <p className="font-bold text-slate-600 text-base">
            {data.item.position}
          </p>
          <p className="text-sm md:text-base leading-snug text-gray-500 text-opacity-100">
            {truncateText(data.item.description, 120)}
          </p>
        </div>
      </div>
    </Link>
  );
}