import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input()
  presentationLabel:string = "";
  @Input()
  nameLabel:string = "";
  @Input()
  descriptionLabel:string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
