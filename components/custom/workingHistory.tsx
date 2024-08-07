import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

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
      time: 'January 2017'
    },
    {
      name: 'PT. Appsensi Tiga Ribu',
      role: 'Full-stack Developer',
      description: 'Assigned for developing Webpage for Manage User, Attendance Report then integrate it with the Realtime data using VueJs, NodeJs and FireStore, also responsible for develop and design Billing Report using NodeJs, BigQuery, Google Spreadsheets.',
      time: 'Mar 2020'
    },
  ]
  return <section className="min-h-screen-90 w-full justify-center px-4">
    <div className="container">
      <h2 className="font-bold mb-4">Working History</h2>
      <div className="flex flex-col -mx-4 justify-center">
        {
          workingList.map(item => {
            return <div className="w-full mb-4 px-2" key={item.time}>
              <Card>
                <div className="flex flex-col md:flex-row md:flex-warp">
                  <CardHeader className="min-w-30 lg:w-1/3">
                    <div className="text-slate-400 text-xs">{item.time}</div>
                    <CardTitle>
                      {item.role}
                    </CardTitle>
                    <CardDescription>
                      {item.name}
                    </CardDescription>
                  </CardHeader>
                  <div className="w-full p-6">
                    {item.description}
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