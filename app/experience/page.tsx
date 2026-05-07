import { Metadata } from "next";
import Footer from "@/components/custom/footer";
import ExperienceContainer from "../(components)/experienceContainer.component";

export const metadata: Metadata = {
  title: "Working Experience",
  description: "Surya A. Ramadhan working experience"
}
export default function ExperiencePage() {
  return (
    <div>
      <ExperienceContainer />
      <Footer/>
    </div>
  );
}