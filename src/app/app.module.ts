import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AboutModule } from './home/about/about.module';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { IconsMenuComponent } from './menu-bar/icons-menu/icons-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent, 
    IconsMenuComponent,
    FooterComponent,
    AsideComponent

  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    AboutModule,
    FontAwesomeModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
