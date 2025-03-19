import { BlogPostData } from "@/lib/utils";
import Link from "next/link";
export default function ItemBlog({ data }: { data: BlogPostData }) {
  const date = new Intl.DateTimeFormat("id-ID", { dateStyle: "long" }).format(new Date(data.published));
  return <section className="text-gray-600">
    <article className="my-2 border border-gray-200 rounded-xl transition-all shadow-inner hover:shadow-lg hover:scale-105">
      <Link href={"/blog/" + data.id}>
        <div className="card p-3 rounded-lg cursor-pointer border-b-2" key={data.id}>
          <h2 className="font-semibold text-xl">{data.title}</h2>
          <div className="flex gap-2 justify-between">
            <div className="">
              <p>Tags: {data.labels}</p>
            </div>
            <div className="">
              <p className="">Published: {date}</p>
            </div>
          </div>
        </div>
      </Link>
    </article>
  </section>
}