import WorkingExperience from './../experience/working-history.json';
import { Experience } from "@/lib/interface";
import ItemExperience from "./experienceItem.component";

export default function ExperienceContainer() {
  const datas: Experience[] = WorkingExperience;
  return (
    <div>
      <section>
        <div className="bg-gray-50 text-gray-600 py-4">
          <div className="px-2 sm:px-8 mx-auto flex flex-col items-start my-12">
            
            <div className="flex flex-col w-full sticky px-8">
              <h1 className="text-green-600 uppercase font-semibold">Working Experience</h1>
              <p className="text-sm md:text-base mb-4">
                My working experience throughout my career
              </p>
            </div>

            <div className="ml-0 w-full sticky">
              <div className="px-1 sm:px-8 mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden pl-0 pr-0 sm:pl-10 sm:pr-10 pb-10 pt-5 h-full">
                  {
                    datas.map((data, i) => {
                      return (
                        <ItemExperience item={data} key={i} />
                      );
                    })
                  }

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}