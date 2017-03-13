import { Component ,OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router'; 
@Component({
  template: `<h4>deparment Detail Area</h4>
                Department id is {{departmentId}}`,
 
})
export class DepartmentDetailClass implements OnInit{ 
public departmentId;
    constructor(private router:ActivatedRoute){}
ngOnInit(){
let id=this.router.snapshot.params['id'];
this.departmentId=id;
}
}
