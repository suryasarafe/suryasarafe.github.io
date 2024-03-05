import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { SkillComponent } from './skill/skill.component';
import { ShowcaseComponent } from './showcase/showcase.component';

export const routes: Routes = [
    { path: '', component: LayoutComponent },
    { path: 'skill', component: SkillComponent },
    { path: 'showcase', component: ShowcaseComponent },
];
