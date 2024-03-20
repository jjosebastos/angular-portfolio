import { Component, OnInit, Input} from '@angular/core';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
  faToolbox = faToolbox;
  @Input()
  expRole:String = "";
  @Input()
  expDuration:String = "";

  constructor() { }

  ngOnInit(): void {
  }

}
