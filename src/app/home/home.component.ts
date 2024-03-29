import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
