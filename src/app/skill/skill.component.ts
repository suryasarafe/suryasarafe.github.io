import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {
  constructor(
    private titleService: Title,
    private meta: Meta,
  ) {
    this.titleService.setTitle('Surya\'s Portpolio | Skill');
    this.meta.updateTag({name: 'description', content: 'Something that I learn '})
  }
}
