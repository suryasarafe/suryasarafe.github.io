import NotFoundContainerComponent from "@/components/custom/not-found.component";
import { BlogPostData } from "@/lib/utils";
import { Metadata } from "next";
import DetailBlogContainer from "./detail-blog.container";
import Footer from "@/components/custom/footer";

interface BlogPostProps { params: { postId: Promise<string> } }


export async function generateMetadata({ params: { postId } }: BlogPostProps): Promise<Metadata> {
  const API_KEY = process.env.API_KEY;
  const BLOG_ID = process.env.BLOG_ID;
  const API_URL = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts/${postId}?key=${API_KEY}&fields=id,title,published,content,labels`;
  const res = await fetch(API_URL);
  const data: BlogPostData = await res.json();
  return {
    title: data.title ?? 'Not Found',
    description: data.content ?? 'Page Not Found',
  }
}

// for working with expored project / static page, change to export in next.config.js
export async function generateStaticParams() {
  const API_KEY = process.env.API_KEY;
  const BLOG_ID = process.env.BLOG_ID;
  const API_URL = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}&&fields=items.id,items.title,items.labels,items.published`;
  const res = await fetch(API_URL);
  const datas = await res.json();
  return datas.items.map((data: BlogPostData) => ({
    postId: data!.id?.toString()
  }));
}

export default async function BlogDetail({ params: { postId } }: BlogPostProps) {
  const API_KEY = process.env.API_KEY;
  const BLOG_ID = process.env.BLOG_ID;
  const API_URL = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts/${postId}?key=${API_KEY}&fields=id,title,published,content,labels`;
  const res = await fetch(API_URL);
  if (!res.ok) {
    return <NotFoundContainerComponent />
  }
  const data: BlogPostData = await res.json();
  return <div>
    <DetailBlogContainer data={{ item: data }} />
    <Footer />
  </div>
}