import { BlogPostData } from "@/lib/utils";
import Link from "next/link";
export default function ItemBlog({ data }: { data: BlogPostData }) {
  return <section>
    <article className="">
      <Link href={"/blog/" + data.id}>
        <div className="card shadow-sm hover:shadow-lg p-3 rounded-lg cursor-pointer border-b-2" key={data.id}>
          <h2 className="font-bold text-2xl">{data.title}</h2>
          <p>{data.body}</p>
        </div>
      </Link>
    </article>
  </section>
}