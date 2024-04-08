import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeComponent } from './home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BannerComponent } from './banner/banner.component';
import { AboutModule } from './about/about.module';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,

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
