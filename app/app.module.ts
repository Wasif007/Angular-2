import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { AppComponent }   from './app.component';
import { ServicesComponent }   from './services.app.component';
import {EmployeeData} from './employee.data'
import {EmployeeDataDetail} from './employee.data.detail'
@NgModule({
  imports:      [ BrowserModule,FormsModule,ReactiveFormsModule],
  declarations: [ ServicesComponent,EmployeeData,EmployeeDataDetail],
  bootstrap:    [ ServicesComponent]
})
export class AppModule { }
