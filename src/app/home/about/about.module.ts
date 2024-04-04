import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card/card.component';
import { HomeModule } from '../home.module';
import { MyselfComponent } from './myself/myself.component';
import { PresentationComponent } from './myself/presentation/presentation.component';
import { AboutComponent } from './about.component';


@NgModule({
  declarations: [
    CardComponent,
    MyselfComponent,
    PresentationComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
