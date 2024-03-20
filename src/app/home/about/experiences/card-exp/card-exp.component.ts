import { Component, Input, OnInit } from '@angular/core';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-exp',
  templateUrl: './card-exp.component.html',
  styleUrls: ['./card-exp.component.css']
})
export class CardExpComponent implements OnInit {
  faToolBox = faToolbox;
  @Input()
  iconExp:any= "";
  @Input()
  expRole:String = "";
  @Input()
  expDuration:String = "";
  constructor() { }

  ngOnInit(): void {
  }

}
