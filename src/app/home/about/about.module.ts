import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MyselfComponent } from './myself/myself.component';
import { PresentationComponent } from './myself/presentation/presentation.component';
import { AboutComponent } from './about.component';
import { SkillsComponent } from './skills/skills.component';
import { TechCardComponent } from './skills/tech-card/tech-card.component';


@NgModule({
  declarations: [
    MyselfComponent,
    PresentationComponent,
    AboutComponent,
    SkillsComponent,
    TechCardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
