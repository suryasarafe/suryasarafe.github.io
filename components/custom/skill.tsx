import { Separator } from "@radix-ui/react-separator";
import { Card, CardDescription, CardTitle } from "../ui/card";
import Image from "next/image";
import React from "react";
import Link from "next/link";

type Work = {
  enabled: boolean
  title: string
  url: string
}
type Skills = {
  name: string
  description: string
  image: string
  website: string
  myWork?: Work[]
}

export default function SkillSection() {
  const skillList: Skills[] = [
    {
      name: "Angular",
      description: "Angular is a web development framework made by Google.",
      image: 'https://github.com/angular.png',
      website: 'https://angular.dev',
      myWork: [
        { enabled: true, title: 'Portpolio', url: 'https://web.archive.org/web/20221205083220/https://surya.devweb.id/' },
        { enabled: true, title: 'Sae Chord', url: 'https://web.archive.org/web/20220719124042/https://chord.devweb.id/' },
        { enabled: false, title: 'TrendApp', url: '/' },
      ]
    },
    {
      name: "Flutter",
      description: "Flutter is a toolkit made by Google for building apps.",
      image: 'https://github.com/flutter.png',
      website: 'https://flutter.dev',
      myWork: [
        { enabled: true, title: 'SMM', url: 'https://play.google.com/store/apps/details?id=com.sae.money_manager&hl=en' }
      ]
    },
    {
      name: "NodeJs",
      description: "To write command line tools and for server-side scripting",
      image: 'https://github.com/nodejs.png',
      website: 'https://nodejs.org',
      myWork: [
        { enabled: false, title: 'Sae Chord', url: '/' },
        { enabled: false, title: 'Attendance Report', url: '/' },
      ]
    },
    {
      name: "Vue.Js",
      description: "A lightweight JavaScript framework for building user interfaces.",
      image: 'https://github.com/vuejs.png',
      website: 'https://vuejs.org',
      myWork: [
        { enabled: false, title: 'Admin Appsensi', url: '/' }
      ]
    },
    {
      name: "PHP",
      description: "A popular scripting language that is especially suited to web development.",
      image: 'https://github.com/php.png',
      website: 'https://php.net',
      myWork: [
        { enabled: false, title: 'TDAMart', url: '/' },
        { enabled: false, title: 'Inventory', url: '/' },
      ]
    },
    {
      name: "JQuery",
      description: "JQuery is a lightweight JavaScript library that simplifies things",
      image: 'https://github.com/jquery.png',
      website: 'https://jquery.com',
      myWork: [
        { enabled: false, title: 'Smart City', url: '/' },
        { enabled: false, title: 'Sphere Dash', url: '/' },
      ]
    },
    {
      name: "React",
      description: "JavaScript library for building user interfaces",
      image: 'https://github.com/react.png',
      website: 'https://react.dev',
      myWork: [
        { enabled: true, title: 'API Comment', url: 'https://www.npmjs.com/package/youtube-api-comment' },
        { enabled: false, title: 'Video Streamer', url: '/' },
      ]
    },
    {
      name: "NextJs",
      description: "Framework with server-side rendering and static website generation",
      image: 'https://github.com/nextjs.png',
      website: 'https://nextjs.org',
      myWork: [
        { enabled: true, title: 'Portpolio', url: '/' },
        { enabled: false, title: 'Vending Machine', url: '/' },
      ]
    },
    {
      name: "Arduino",
      description: "Open-source electronic prototyping platform",
      image: 'https://github.com/arduino.png',
      website: 'https://arduino.cc',
      myWork: [
        { enabled: false, title: 'Smart Lamp', url: '/' },
        { enabled: false, title: 'Motor Security', url: '/' },
      ]
    },
  ]

  const internalLink = (work: Work) => {
    if (work.url == '/') {
      return <Link href="/" className="text-slate-500">{work.title}</Link>
    } else {
      return <a className="text-slate-500" target="_blank" href={work.url}>{work.title}</a>
    }
  }

  const generateLink = (work: Work) => {
    if (work.enabled) {
      return <div className="cursor-pointer hover:bg-slate-100 rounded-md px-2" key={work.title}>
        {internalLink(work)}
      </div>
    } else {
      return <div className="cursor-not-allowed hover:bg-slate-100 rounded-md px-2" key={work.title}>
        <p className="text-slate-500">{work.title}</p>
      </div>
    }
  }

  return <section className="min-h-screen-90 w-full justify-center px-4">
    <div className="container">
      <h2 className="font-bold mb-4">My Personal Development</h2>
      <div className="flex flex-wrap -mx-4 justify-center">
        {skillList.map((item) => {
          return <div className="w-full lg:w-1/3 mb-4 px-2" key={item.name}>
            <Card className="border gap-4 shadow-md">
              <div className="flex items-center space-x-4 rounded-md pt-4 px-4">
                <Image src={item.image} title={item.name} alt={item.name} width={64} height={64} />
                <div className="flex-1 space-y-1">
                  <CardTitle>{item.name}</CardTitle>
                  <CardDescription className="">{item.description}</CardDescription>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="w-[90%] mx-auto">
                  <Separator className="mt-4 mb-0 border-t" />
                </div>
                <div className="w-full flex min-h-10 justify-between items-center text-sm px-4">
                  <div className="text-slate-500">
                    <p>My Project:</p>
                  </div>
                  <div className="flex text-sm ">
                    {item.myWork?.map((work: Work) => {
                      return generateLink(work)
                    })}
                  </div>
                </div>
              </div>
            </Card>

          </div>
        })
        }
      </div>

    </div>

  </section>
}