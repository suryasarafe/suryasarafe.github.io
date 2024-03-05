import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.scss'
})
export class ShowcaseComponent {
  constructor(
    private titleService: Title,
    private meta: Meta,
  ) {
    this.titleService.setTitle('Surya\'s Portpolio | Showcase');
    this.meta.updateTag({name: 'description', content: 'Something that I\'ve build'})
  }
}
