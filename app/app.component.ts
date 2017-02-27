import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styles:[`input.ng-valid{border-left:5px solid green;}
  input.ng-invalid{border-left:5px solid red;}`]
})
export class AppComponent { 
   defaultName="WAsif";
onSubmit(value:any)
{
console.log(value);
}
}
