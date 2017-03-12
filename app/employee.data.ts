import { Component ,OnInit} from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import {EmployeeServiceClass} from './app.service.employee'
@Component({
  selector: 'employee-data-list',
  template: `<h2>Wasif Ateeq<h2>
  <ul *ngFor="let emplo of employess">
  <li>{{emplo.name}}</li>
  <ul>`
 
})
export class EmployeeData implements OnInit{
employess=[];

constructor(private _empl:EmployeeServiceClass){}


    ngOnInit(){
this.employess=this._empl.getEmployeeData();

    } 
   
}
