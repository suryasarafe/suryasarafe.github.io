import SkillSection from "@/components/custom/skill";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'My Personal Development',
  description: 'What I learn from in my entire life',
}
export default function NotFoundPage() {
  return (
    <div className="sm:mt-16">
      <SkillSection />
    </div>
  );
} 