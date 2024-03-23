import { Component } from '@angular/core';
import { ChildrenOutletContexts, Router, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent
  ],
  providers: [

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor() {}

  title = 'Welcomes';
}
