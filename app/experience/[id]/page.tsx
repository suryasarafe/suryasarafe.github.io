import datas from '@/app/experience/working-history.json';
import NotFoundContainerComponent from '@/components/custom/not-found.component';
import { ParamsId } from "@/lib/interface";
import { Metadata } from 'next';
import DetailContainerComponent from './detail-container.component';
import SkillSection from '@/components/custom/skill';
import SkillContainerComponent from './skill-container.component';


export async function generateMetadata({ params }: ParamsId): Promise<Metadata> {
  const pageData = datas.find((item) => item.id === Number(params.id));
  return {
    title: pageData ? `Working at ${pageData.company}` : 'Page Not Found',
    description: pageData ? pageData.description : "Page youre looking for cannot be found or have been moved"
  };
}

export default function DetailExperience({ params }: ParamsId) {
  const data = datas.find((item) => item.id === Number(params.id));

  if (!data) {
    return <NotFoundContainerComponent />
  }
  return (
    <div>
      <DetailContainerComponent item={data}/>
      <SkillContainerComponent item={data}/>
    </div>
  );
}