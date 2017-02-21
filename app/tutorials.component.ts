import { Component } from '@angular/core';

@Component({
  selector: 'my-tutorial',
  template: `<h2>{{title}}</h2>
  			<img [src]="imglink"><br><br>
  			<input type="text" value="angular">
  			<h3>Hello blue</h3>
  			<div [class.myClass]="check">RED</div>
  			<div [style.color]="check ? 'blue' :'orange'">Checking</div>
  			`,
  styles : [`.myClass {
  color : red;
  }`]
             })
export class TutorialsComponent { 
public title="Wasif Ateeq";
public imglink="http://lorempixel.com/400/200/";
public check=false;
}
