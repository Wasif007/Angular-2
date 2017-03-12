import { Component } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import {EmployeeServiceClass} from './app.service.employee';
@Component({
  selector: 'employee-data',
  template: `<h1>Wasif</h1>
  <employee-data-list></employee-data-list>
  <employee-data-detail></employee-data-detail>`,
  providers:[EmployeeServiceClass]
 
})
export class ServicesComponent{ 
}
