import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { IconsMenuComponent } from './menu-bar/icons-menu/icons-menu.component';
import { HomeComponent } from './home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { CardComponent } from './about/card/card.component';
import { MyselfComponent } from './about/myself/myself.component';
import { PresentationComponent } from './about/myself/presentation/presentation.component';
import { ExperiencesComponent } from './about/myself/experiences/experiences.component';
import { StackComponent } from './about/myself/stack/stack.component';



@NgModule({
  declarations: [
    HomeComponent,
    IconsMenuComponent,
    MenuBarComponent,
    BannerComponent,
    AboutComponent,
    CardComponent,
    MyselfComponent,
    PresentationComponent,
    ExperiencesComponent,
    StackComponent,
    
  ],
  imports: [
    FontAwesomeModule,
    CommonModule,
  ], 
  exports:[
    HomeComponent,
    BrowserAnimationsModule,
    BannerComponent
  ]
})
export class HomeModule { 

}
