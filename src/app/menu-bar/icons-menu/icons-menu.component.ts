import { Component, NgModule, OnInit } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icons-menu',
  templateUrl: './icons-menu.component.html',
  styleUrls: ['./icons-menu.component.css'],

})

export class IconsMenuComponent implements OnInit {
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;
  faBars = faBars;

  constructor() { }

  ngOnInit(): void {
  }

}
