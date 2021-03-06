import { Component ,OnInit} from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import {EmployeeServiceClass} from './app.service.employee'
@Component({
  selector: 'employee-data-detail',
  template: `<h2>Wasif Ateeq<h2>
    <h3>{{errrMsg}}</h3>

  <ul *ngFor="let emplo of employess">
  <li>{{emplo.name}} {{emplo.id}}</li>
  <ul>`
 
})
export class EmployeeDataDetail implements OnInit{
employess=[];
 errrMsg:string;

constructor(private _empl:EmployeeServiceClass){}


    ngOnInit(){
this._empl.getEmployeeData().subscribe(empDatas =>this.employess=empDatas,
 empDataError => this.errrMsg=empDataError);

    } 
   
}
