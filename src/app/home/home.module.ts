import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { IconsMenuComponent } from './menu-bar/icons-menu/icons-menu.component';
import { HomeComponent } from './home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { AboutModule } from './about/about.module';



@NgModule({
  declarations: [
    HomeComponent,
    IconsMenuComponent,
    MenuBarComponent,
    BannerComponent,
    FooterComponent,
    
  ],
  imports: [
    FontAwesomeModule,
    CommonModule,
    AboutModule
  ], 
  exports:[
    HomeComponent,
    BrowserAnimationsModule,
    BannerComponent
  ]
})
export class HomeModule { 

}
