import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component_2.html',
  styles:[`
  input.ng-valid {border-left:5px solid green;}
  input.ng-invalid {border-left:5px solid red;}
  `]
 
})
export class AppComponent { 
   userForm=new FormGroup({
     name:new FormControl('wasif',[Validators.required,Validators.minLength(4)]),
     street:new FormControl(),
     country:new FormControl(),
     postalcode:new FormControl(),
     address:new FormControl(),
     city:new FormControl()
   });

   onSubmit(){
     console.log(this.userForm.value);
   }
}
