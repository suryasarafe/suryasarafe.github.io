import Footer from "@/components/custom/footer"
import ItemBlog from "@/components/custom/itemBlog"
import { Separator } from "@/components/ui/separator"
import { BlogPostData } from "@/lib/utils"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog Page",
  description: "I share more about me, what I do, What I learn and some unnecessary necessary thing"
}
const dataSimplify = (data: BlogPostData[]) => {
  const result = []
  for (let i = 0; i < data.length; i++) {
    result.push(
      <ItemBlog data={data[i]} />
    )
  }
  return result
}
export default async function BlogPage() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const datas: BlogPostData[] = await response.json()
  return <section>
    <div className="h-40 p-10 text-center">
      <h1 className="font-bold text-2xl">Welcome to my Blog</h1>
      <p>Here where some unnecessary necessary thing that I share, learn or do</p>
    </div>
    <Separator className="w-[90vw] mx-auto"/>
    <div className="p-10">
      <div className="container flex flex-col">
        {dataSimplify(datas)}
      </div>
    </div>
    <Footer/>
  </section>
}
