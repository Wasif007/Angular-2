import { Component } from '@angular/core';
import { TutorialsComponent } from './tutorials.component';

@Component({
  selector: 'my-app',
  template: `<h1>Hello Wasif</h1>
  <label>Enter something to be printed in child</label>
  <input type="text" #pdata (keyup)="0">
  <my-tutorial [parentData]="pdata.value"></my-tutorial>`,
  directives :[TutorialsComponent]
             })
export class AppComponent { }
