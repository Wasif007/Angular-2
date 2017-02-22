import { Component } from '@angular/core';

@Component({
  selector: 'my-tutorial',
  template: `<h2>{{title}}</h2>
  			<img [src]="imglink"><br><br>
  			<input type="text" value="angular">
  			<h3>Hello blue</h3>
  			<div [class.myClass]="check">RED</div>
  			<div [style.color]="check ? 'blue' :'orange'">Checking</div>
  			<button (click)="onClick(democlick.value)">Click ME</button>
  			<input type="text" #democlick>
  			<input type="text" [(ngModel)]="fname">
  			<input type="text" [(ngModel)]="lname">
  			Full Name :{{fname}}{{lname}}
  			`,
  styles : [`.myClass {
  color : red;
  }`]
             })
export class TutorialsComponent { 
public title="Wasif Ateeq";
public imglink="http://lorempixel.com/400/200/";
public check=false;
public fname;
public lname;
onClick(value)
{
	console.log(value);
}

}
