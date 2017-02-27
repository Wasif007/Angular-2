import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component_2.html'
 
})
export class AppComponent { 
   userForm=new FormGroup({
     name:new FormControl(),
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
