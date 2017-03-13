import { Component ,OnInit} from '@angular/core';
import {ActivatedRoute,Router,Params} from '@angular/router'; 
@Component({
  template: `<h4>deparment Detail Area</h4>
                Department id is {{departmentId}}
                <br>
                <a (click)="ngPrevious()">Previous</a>
                <a (click)="ngNext()">Next</a>
               <p> <button (click)="ngBack()">Back</button>
                </p>
                `
                
                ,
 
})
export class DepartmentDetailClass implements OnInit{ 
public departmentId;
    constructor(private router:ActivatedRoute,private routers:Router){}
ngOnInit(){
    this.router.params.subscribe((paramss:Params)=>{
        let id=parseInt(paramss['id']);
        this.departmentId=id;
    });
}
ngPrevious()
{
let previousId=this.departmentId-1;
  this.routers.navigate(['/departments',previousId]);
}
ngNext()
{
let nextId=this.departmentId+1;
  this.routers.navigate(['/departments',nextId]);
}
ngBack()
{
    let backId=this.departmentId? this.departmentId :null;
    this.routers.navigate(['/departments',{id:backId}]);
}
}
