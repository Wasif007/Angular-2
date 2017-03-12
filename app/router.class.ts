import { Component } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'router-app',
  template: `<h1>Router Component</h1>  
  <h3>Wasi</h3>
  <nav>
  <a routerLink="/departments" routerLinkActive="active">Departments</a>
  <a routerLink="/employees" routerLinkActive="active">Employees</a>

  </nav>
    <router-outlet></router-outlet>
  `,
 
})
export class RouterComponent{ 

}
