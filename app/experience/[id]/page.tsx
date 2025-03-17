import datas from '@/app/experience/working-history.json';
import NotFoundContainerComponent from '@/components/custom/not-found.component';
import { Experience, ParamsId } from "@/lib/interface";
import { Metadata } from 'next';
import DetailContainerComponent from './detail-container.component';
import SkillContainerComponent from './skill-container.component';
import { truncateText } from '@/lib/utils';


export async function generateMetadata({ params }: ParamsId): Promise<Metadata> {
  const pageData = datas.find((item) => item.id === Number(params.id));
  return {
    title: pageData ? truncateText(`Working at ${pageData.company}`) : 'Page Not Found',
    description: pageData ? truncateText(pageData.description) : "Page youre looking for cannot be found or have been moved"
  };
}

export async function generateStaticParams() {
  const params = datas.map((data: Experience) => ({
    id: data.id.toString()
  }));
  return params;
}

export default async function DetailExperience({ params }: ParamsId) {
  const id = await params.id;
  const data = datas.find((item) => item.id === Number(id));

  if (!data) {
    return <NotFoundContainerComponent />
  }
  return (
    <div>
      <DetailContainerComponent item={data} />
      <SkillContainerComponent item={data} />
    </div>
  );
}