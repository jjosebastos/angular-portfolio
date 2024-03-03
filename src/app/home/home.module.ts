import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { IconsMenuComponent } from './menu-bar/icons-menu/icons-menu.component';
import { HomeComponent } from './home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BannerComponent } from './banner/banner.component';



@NgModule({
  declarations: [
    HomeComponent,
    IconsMenuComponent,
    MenuBarComponent,
    BannerComponent,
    
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
