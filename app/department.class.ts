import { Component } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'deparment-class',
  template: `<h4>deparment Area</h4>
  <ul class="items">
  <li (click)="ngSelect(deparment)" *ngFor="let deparment of departments">
  <span class="badge">{{deparment.id}}</span> {{deparment.name}}
  </li>
  </ul>
  
  `,
 
})
export class DepartmentClass{ 

  constructor(private router:Router){}
departments=[
  {"id":1,"name":"Angular"},
  {"id":2,"name":"Node"},
  {"id":3,"name":"MongoDb"}
]

ngSelect(deparment)
{
  this.router.navigate(['/departments',deparment.id]);
}
}
