import { Component, INJECTOR, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-card',
  templateUrl: './tech-card.component.html',
  styleUrls: ['./tech-card.component.css']
})
export class TechCardComponent implements OnInit {
  @Input()
  iconExperience:String = "";
  @Input()
  skillType:String = "";
  @Input()
  descriptionOfSkill:String = "";
  
  isImpar(numero : number ): boolean {
    return numero % 2 !== 0;
  }

  items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
