import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Separator } from "../ui/separator";

export default function WorkingHistory() {
  const workingList = [
    {
      name: 'PT. TERRALOGIQ INTEGRASI SOLUSI',
      role: 'Web Developer',
      description: 'Terralogiq is a Tech Company and Google Cloud Partner that provides Geospatial, Location Intelligence and Mobility Solutions in Indonesia. Responsible developing Denpasar Smartcity(Demo version), Website for displaying location on map with border and POI (Point Of Interest), using JQuery and PHP.',
      time: 'June 2015'
    },
    {
      name: 'PT. SWAMEDIA INFORMATIKA',
      role: 'PHP Programer',
      description: 'Working in wide variety business applications such as Telecommunication System, Management Report System, Electrical System, Key Performance Indicator ( KPI ) System and Event Organizer. Assigned to developing Web App for e-commerce, known as TDA Mart using PHP and Code Igniter.',
      time: 'March 2016'
    },
    {
      name: 'PT. INDISMART KREATIF IDEA',
      role: 'Front-End Developer',
      description: 'PT. Indismart Kreatif Idea is a member of Smart City Community and Innovation Center - Intitut Teknologi Bandung. Assigned to design and develop the system and device internet of thing (IOT) for street lighting. Work in small team to develop Internet of Things(IoT) Product. Designing Web Dashboard that can monitor and controling device using AngularJS.',
      time: 'January 2017'
    },
    {
      name: 'PT. Intersolusi Teknologi Asia (BTS.ID)',
      role: 'Sr. Front-End Developer',
      description: 'PT Intersolusi Teknologi Asia also known as Bridge Technology Services. Assigned for design and developing some internal and confidential project, working on small and big team. The project itself have different purpose like reporting, reservation room, recruiter online, e-commerce designing using Angular or ReactJs. In most case i responsible for development, deploy and manage the app. Some app i use in this company: SVN for managing Document, Ticket, Test Case, Release Notes and others. Git for Code sharing and Versioning. NodeJs and it\'s dependency for Deploying.',
      time: 'April 2018'
    },
    {
      name: 'PT. Appsensi Tiga Ribu',
      role: 'Full-stack Developer',
      description: 'Assigned for developing Webpage for Manage User, Attendance Report then integrate it with the Realtime data using VueJs, NodeJs and FireStore, also responsible for develop and design Billing Report using NodeJs, BigQuery, Google Spreadsheets.',
      time: 'Mar 2020'
    },
  ]

  return <section className="min-h-screen-90 w-full justify-center px-4 mt-4">
    <div className="container">
      <h2 className="font-bold mb-4">Working History</h2>
      <div className="flex flex-wrap -px-4">
        {
          workingList.map((item, i) => {
            return <div key={item.time} className="w-1/3 p-2">
              <Card className="hover:shadow-md">
                <div className="">
                  <CardHeader className="text-left py-2">
                    <div className="flex justify-between w-full text-slate-400">
                      <div className="text-xs">{item.time}</div>
                      <div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <div className="cursor-pointer hover:scale-110">
                              <FontAwesomeIcon icon={faCommentAlt} height={14} width={14} />
                            </div>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                              <DialogTitle>
                                <div className="flex flex-col">
                                  <p className="text-sm text-slate-400 font-normal">{item.time}</p>
                                  <p className="text-lg">{item.name}</p>
                                </div>
                              </DialogTitle>
                              <DialogDescription>
                                Working as {item.role}
                              </DialogDescription>
                            </DialogHeader>
                            <Separator/>
                            <div className="">
                              <p className="text-justify text-slate-500 text-sm">{item.description}</p>
                            </div>
                          </DialogContent>
                        </Dialog>

                      </div>
                    </div>
                    <CardTitle>
                      {item.role}
                    </CardTitle>
                    <CardDescription>
                      {item.name}
                    </CardDescription>
                  </CardHeader>
                </div>
              </Card>
            </div>
          })
        }
      </div>
    </div>
  </section>
}