import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { fadeInOutComponent } from '../fadein.animation';

interface Skills {
  name: string;
  description: string;
  img: string;
}
@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss',
  animations: [fadeInOutComponent],
})
export class SkillComponent {
  constructor(
    private titleService: Title,
    private meta: Meta,
  ) {
    this.titleService.setTitle('Surya\'s Portpolio | Skill that I learn');
    this.meta.updateTag({ name: 'description', content: 'Surya\'s Portpolio | skill that i learn' })
    this.shuffleListItems();
  }
  ngOnInit() {
    for (let i = 0; i < this.skillList.length; i++) {
      setTimeout(() => {
        this.show[i]=true;
      }, i*300);
      
    }
  }
  shuffleListItems() {
    for (let i = this.skillList.length - 1; i > 0; i--) {
      this.show[i]=false;
      const j = Math.floor(Math.random() * (i + 1));
      [this.skillList[i], this.skillList[j]] = [this.skillList[j], this.skillList[i]];
    }
  }
  show:boolean[] = [];
  skillList: Skills[] = [
    {
      name: 'Angular',
      description: 'Angular is a web development framework made by Google. It\'s a popular choice for building modern web apps.',
      img: 'assets/images/angular.ico'
    },{
      name: 'JQuery',
      description: 'JQuery is a lightweight JavaScript library that simplifies things like HTML document traversal and manipulation, event handling, and animation.',
      img: 'assets/images/jquery.ico'
    },{
      name: 'Flutter',
      description: 'Flutter is a toolkit made by Google for building apps. It lets you create apps for mobile, web, and desktop with the same codebase.',
      img: 'assets/images/flutter.png'
    },{
      name: 'Vue.Js',
      description: 'Vue.js is a lightweight JavaScript framework for building user interfaces. It\'s often used to create single-page applications (SPAs) and dynamic web interfaces.',
      img: 'assets/images/vuejs.svg'
    },{
      name: 'NodeJs',
      description: 'Node.js is an open-source, server-side JavaScript runtime environment that allows developers to run JavaScript code outside of a web browser.',
      img: 'assets/images/nodejs.png'
    },{
      name: 'MySQL',
      description: 'MySQL is a popular open-source relational database management system (RDBMS). It\'s used to store and manage data in structured tables, making it easy to organize and retrieve information.',
      img: 'assets/images/mysql.ico'
    },{
      name: 'MongoDB',
      description: 'MongoDB is a popular, open-source NoSQL database system. It\'s designed to store and manage large volumes of data, with flexibility and scalability in mind.',
      img: 'assets/images/mongodb.ico'
    },{
      name: 'Express.js',
      description: 'Express is a minimalist web framework for Node.js, used for building web applications and APIs. It\'s lightweight and highly customizable.',
      img: 'assets/images/express.png'
    },
  ]
}
