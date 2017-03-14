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
import{AppModuleRouter} from './app.module.router';
import {routingComponent} from './app.module.router';
import {AnimationClass} from './app.animation.class';
@NgModule({
  imports:      [ BrowserModule,FormsModule,ReactiveFormsModule,HttpModule,AppModuleRouter],
  declarations: [ RouterComponent,routingComponent,AnimationClass],
  bootstrap:    [ AnimationClass]
})
export class AppModule { }
