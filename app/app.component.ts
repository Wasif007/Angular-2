import { Component ,OnInit} from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component_2.html',
  styles:[`
  input.ng-valid {border-left:5px solid green;}
  input.ng-invalid {border-left:5px solid red;}
  `]
 
})
export class AppComponent implements OnInit{ 
 
 userForm:FormGroup;
 constructor(private _formBuilder:FormBuilder){};
 ngOnInit(){
   this.userForm=this._formBuilder.group({
    name:['Wasi',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
    street:[],
    country:[],
    address:[],
    city:[],
    postalcode:['',[Validators.pattern('^[0-9][0-9]{4}')]]
   });
 }
 /*

   userForm=new FormGroup({
     name:new FormControl('Was',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]),
     street:new FormControl(),
     country:new FormControl(),
     postalcode:new FormControl(null,Validators.pattern('^[0-9][1-9]{4}')),
     address:new FormControl(),
     city:new FormControl()
   });
*/
   onSubmit(){
     console.log(this.userForm.value);
   }
}
