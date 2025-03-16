import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Experience, Project } from "@/lib/interface";
import Link from "next/link";

const internalLink = (data: Project) => {
  if (data.url == '/') {
    return <Link href="/" className="text-slate-500">{data.name}</Link>
  } else {
    return <a className="text-slate-500" target="_blank" href={data.url}>{data.name}</a>
  }
}

const generateLink = (data: Project) => {
  if (data.url != '') {
    return <div className="cursor-pointer rounded-lg px-2" key={data.name}>
      {internalLink(data)}
    </div>
  } else {
    return <div className="rounded-lg px-2" key={data.name}>
      <p className="text-slate-500">{data.name}</p>
    </div>
  }
}

export default function SkillContainerComponent(data: { item: Experience }) {
  return (
    <div className="min-h-screen bg-gray-100 pt-5 md:pt-16 w-full justify-center px-6 text-gray-600">
      <h3 className="font-semibold mb-4">Used Programming Language / Library / Framework</h3>
      <div className="flex flex-wrap -mx-4 justify-center">
        {data.item.skill.map((item) => {
          return <div className="w-full lg:w-1/3 mb-4 px-2" key={item.name}>
            <Card className="border gap-4 shadow-md hover:shadow-lg hover:scale-105 transition-all rounded-xl bg-white">
              <div className="flex items-center space-x-4 rounded-md pt-4 px-4">
                <div className="flex-1 space-y-1">
                  <CardTitle>{item.name}</CardTitle>
                  <CardDescription className="">{item.description}</CardDescription>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="w-[90%] mx-auto">
                  <div className="mt-4 mb-0 border-green-600 border"></div>
                </div>
                <p className="text-gray-600 px-4">Project:</p>
                <div className="w-full flex flex-wrap justify-between text-sm px-2 mb-4">
                  {item.project?.map((project,i ) => {
                    return <div className="" key={i}> {
                      generateLink(project)
                    }
                    </div>
                  })}
                </div>
              </div>
            </Card>

          </div>
        })
        }
      </div>
    </div>
  );
}