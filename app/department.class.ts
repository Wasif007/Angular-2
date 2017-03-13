import { Component ,OnInit} from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router'
@Component({
  selector: 'deparment-class',
  template: `<h4>deparment Area</h4>
  <ul class="items">
  <li (click)="ngSelect(deparment)" [class.selected]="ngColor(deparment)" *ngFor="let deparment of departments">
  <span class="badge">{{deparment.id}}</span> {{deparment.name}}
  </li>
  </ul>
  
  `,
 
})
export class DepartmentClass implements OnInit{ 

public selectedId;
  constructor(private router:Router,private route:ActivatedRoute){}
departments=[
  {"id":1,"name":"Angular"},
  {"id":2,"name":"Node"},
  {"id":3,"name":"MongoDb"}
]

ngSelect(deparment)
{
  this.router.navigate([deparment.id],{relativeTo:this.route});
}

ngOnInit()
{
   this.route.params.subscribe((paramss:Params)=>{
        let id=parseInt(paramss['id']);
        this.selectedId=id;
    });
}

ngColor(department)
{
  return this.selectedId===department.id;
}
}

