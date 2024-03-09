import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
declare var dataLayer: any;

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  constructor(
    private titleService: Title,
    private meta: Meta,
  ) {
    this.titleService.setTitle('Surya\'s Portpolio | Home');
    this.meta.updateTag({name: 'description', content: 'Surya\'s Portpolio home screen'})
  }
  linkImg:string = '/assets/images/background.png';
}
