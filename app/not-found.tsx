import NotFoundContainerComponent from "@/components/custom/not-found.component";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'Page youre looking for cannot be found or have been moved',
}
export default function NotFoundPage() {
  return (
    <NotFoundContainerComponent />
  );
} 