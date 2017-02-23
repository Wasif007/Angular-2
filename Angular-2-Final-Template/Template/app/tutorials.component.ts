import { Component } from '@angular/core';

@Component({
  selector: 'my-tutorial',
  template: `<h2>{{title}}</h2>
  			<img [src]="imglink"><br><br>
  			<input type="text" value="angular">
  			<h3>Hello blue</h3>
  			<div [style.color]="check ? 'blue' :'orange'">Checking</div>
  			<button (click)="onClick(democlick.value)">Click ME</button>
  			<input type="text" #democlick>
  			<br>
  			<input type="text" [(ngModel)]="fname">
  			<input type="text" [(ngModel)]="lname">
  			Full Name :{{fname}}{{lname}}
  			<br>
  			<p *ngIf="showelement">Show Element</p>
  			<div [ngSwitch]="color">
  			<p *ngSwitchWhen="'red'">Red Color</p>
  			<p *ngSwitchWhen="'blue'">Blue Color</p>
  			<p *ngSwitchDefault>Invalid Color</p>
  			</div>
  			<ul>
  			<li *ngFor="let color of colors">{{color}}</li>
  			</ul>
  			<p [ngClass]="{classOne:cone}">NGCLASS</p>
  			<button (click)="onClicked()">Toggle Me</button>
  			<p>Data from parent is </p>{{parentData}}
  			<p>{{date|date:"MM/dd/yy"}}
  			  			<p>{{date|date:"shortdate"}}

  			`,
  styles : [`.classOne{
color:red;
  }`],
  inputs:['parentData']
             })
export class TutorialsComponent { 
public title="Wasif Ateeq";
public imglink="http://lorempixel.com/400/200/";
public check=false;
public fname;
public parentData:string;
public lname;
public date=new Date();
public showelement=true;
public color="blue";
public cone=true;
public style="italic";
public colors=['blue','red','green'];
onClick(value)
{
	console.log(value);
}
onClicked()
{
	this.cone=!this.cone;
}
}
