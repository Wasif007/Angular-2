import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent { 
   defaultName="WAsif";
onSubmit(value:any)
{
console.log(value);
}
}
