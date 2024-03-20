import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardExpComponent } from './experiences/card-exp/card-exp.component';
import { ExperiencesComponent  } from './experiences/experiences.component';
import { CardComponent } from './card/card.component';
import { HomeModule } from '../home.module';
import { MyselfComponent } from './myself/myself.component';
import { PresentationComponent } from './myself/presentation/presentation.component';
import { AboutComponent } from './about.component';


@NgModule({
  declarations: [
    CardExpComponent,
    ExperiencesComponent,
    CardComponent,
    MyselfComponent,
    PresentationComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    ExperiencesComponent,
    AboutComponent
  ]
})
export class AboutModule { }
