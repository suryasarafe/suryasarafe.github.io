import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface BlogPostData {
  id?: string
  userId?: string
  title: string
  content: string
  published: string
  labels: string[]
}