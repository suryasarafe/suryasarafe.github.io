import Footer from "@/components/custom/footer"
import ItemBlog from "@/components/custom/itemBlog"
import NotFoundContainerComponent from "@/components/custom/not-found.component"
import { Separator } from "@/components/ui/separator"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog Page",
  description: "I share more about me, what I do, What I learn and some unnecessary necessary thing"
}

export default async function BlogPage() {
  const API_KEY = process.env.API_KEY;
  const BLOG_ID = process.env.BLOG_ID;
  const API_URL = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}&&fields=items.id,items.title,items.labels,items.published`;
  const res = await fetch(API_URL);
  if (!res.ok) {
    return <NotFoundContainerComponent />
  }
  const posts = await res.json();
  return <section className="bg-gray-100">
    <div className="h-40 p-10 text-center">
      <div className="p-5 border-gray-300 border rounded-xl w-100">
        <h1 className="font-semibold text-2xl text-gray-700">My Blog Page</h1>
        <p className="text-gray-700">Here where some unnecessary necessary thing that I share, learn or do</p>
      </div>
    </div>
    <Separator className="w-[90vw] mx-auto" />
    <div className="p-10">
      <div className="container flex flex-col">

        <div>
          <h2 className="text-gray-700 font-semibold">Blog Posts</h2>
          {posts.items.map((post: any, i: number) => (
            <ItemBlog data={post} key={i} />
          ))}

        </div>
      </div>
    </div>
    <Footer />
  </section>
}
