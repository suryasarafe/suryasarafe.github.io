import Footer from "@/components/custom/footer";
import ItemBlog from "@/components/custom/itemBlog";
import { BlogPostData } from "@/lib/utils";
import { Metadata } from "next";

interface BlogPostProps { params: { postId: string } }


export async function generateMetadata({ params: { postId } }: BlogPostProps): Promise<Metadata> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + postId )
  const data: BlogPostData = await response.json()
  return {
    title: data.title,
    description: data.body,
    // openGraph: {
    //   images: [
    //     { url: "https://localohost" }
    //   ]
    // }
  }
}

// for working with expored project / static page, change to export in next.config.js

export async function generateStaticParams() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const datas: BlogPostData[] = await response.json()
  return datas.map((data: BlogPostData) => ({
    params: { postId: data!.id?.toString() }
  }));
}

export default async function BlogDetail({ params: { postId } }: BlogPostProps) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + postId )
  const data: BlogPostData = await response.json()
  return <section className="">
    <div className="container min-h-screen-90">
      <div className="flex flex-col container gap-4">
        <ItemBlog data={data}/>
      </div>
    </div>
    <Footer/>
  </section>
}