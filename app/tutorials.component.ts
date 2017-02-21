import { Component } from '@angular/core';

@Component({
  selector: 'my-tutorial',
  template: `<h2>{{title}}</h2>
  			<img [src]="imglink">
  			<input type="text" value="angular">
  			<h3>Hello blue</h3>`,
  styles : [`h3 {
  color : red;
  }`]
             })
export class TutorialsComponent { 
public title="Wasif Ateeq";
public imglink="http://lorempixel.com/400/200/";
}
