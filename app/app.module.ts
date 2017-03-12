import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent }   from './app.component';
import { ServicesComponent }   from './services.app.component';
import {EmployeeData} from './employee.data'
import {EmployeeDataDetail} from './employee.data.detail'
@NgModule({
  imports:      [ BrowserModule,FormsModule,ReactiveFormsModule,HttpModule],
  declarations: [ ServicesComponent,EmployeeData,EmployeeDataDetail],
  bootstrap:    [ ServicesComponent]
})
export class AppModule { }
