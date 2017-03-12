import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent }   from './app.component';
import { ServicesComponent }   from './services.app.component';
import {EmployeeData} from './employee.data';
import {EmployeeDataDetail} from './employee.data.detail';
import {RouterModule} from '@angular/router';
import {RouterComponent} from  './router.class';
import {EmployeeClass} from './employeee.class';
import {DepartmentClass} from './department.class';
@NgModule({
  imports:      [ BrowserModule,FormsModule,ReactiveFormsModule,HttpModule,RouterModule.forRoot([
    {path:'departments',component:DepartmentClass},
    {path:'employees',component:EmployeeClass}
  ])],
  declarations: [ RouterComponent,EmployeeClass,DepartmentClass],
  bootstrap:    [ RouterComponent]
})
export class AppModule { }
