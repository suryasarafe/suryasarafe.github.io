import { Metadata } from "next";
import WorkingExperience from './working-history.json';
import { Experience } from "@/lib/interface";
import ItemExperience from "./item.component";
import Footer from "@/components/custom/footer";

export const metadata: Metadata = {
  title: "Working Experience",
  description: "Surya A. Ramadhan working experience"
}
export default function ExperiencePage() {
  const datas: Experience[] = WorkingExperience;
  return (
    <div>
      <section>
        <div className="bg-gray-50 text-gray-600 py-4">
          <div className="px-2 sm:px-8 mx-auto flex flex-col items-start md:flex-row my-12 md:my-12">
            
            <div className="flex flex-col w-full sticky md:top-24 lg:w-1/4 mt-2 md:mt-6 px-8">
              <h1 className="text-green-600 uppercase font-semibold">Working Experience</h1>
              <p className="text-sm md:text-base mb-4">
                My working experience throughout my career
              </p>
            </div>

            <div className="ml-0 md:ml-12 lg:w-3/4 sticky">
              <div className="px-1 sm:px-8 mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden pl-0 pr-0 sm:pl-10 sm:pr-10 pb-10 pt-5 h-full">
                  <div className="border border-green-600 absolute h-full left-line"></div>
                  <div className="border border-green-600 absolute h-full right-line"></div>

                  {
                    datas.map((data, i) => {
                      return (
                        <ItemExperience item={data} isLeft={i % 2 == 1 ? true : false} key={i} />
                      );
                    })
                  }

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}