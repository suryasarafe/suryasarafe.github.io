import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    
  }
  goToHome() {
    this.router.navigate(['/']);
  }
  goToSkill() {
    this.router.navigate(['/skill']);
  }
  activeclass:string[] = ['active', 'text-color'];
}
