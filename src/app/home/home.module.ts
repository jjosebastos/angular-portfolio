import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { IconsMenuComponent } from './menu-bar/icons-menu/icons-menu.component';
import { HomeComponent } from './home.component';




@NgModule({
  declarations: [
    HomeComponent,
    IconsMenuComponent,
    MenuBarComponent
  ],
  imports: [
    FontAwesomeModule,
    CommonModule
  ], 
  exports:[
    HomeComponent
  ]
})
export class HomeModule { 

}
