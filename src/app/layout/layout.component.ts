import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { fadeInOutComponent } from '../fadein.animation';
declare var dataLayer: any;

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  animations: [fadeInOutComponent]
})
export class LayoutComponent {
  show:boolean = false;
  constructor(
    private titleService: Title,
    private meta: Meta,
  ) {
    this.titleService.setTitle('Surya\'s Portpolio | Home');
    this.meta.updateTag({name: 'description', content: 'Surya\'s Portpolio home screen'})
  }
  ngOnInit() {
    this.show = true;
  }
  linkImg:string = '/assets/images/background.png';
}
