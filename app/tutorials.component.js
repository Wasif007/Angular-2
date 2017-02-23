"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TutorialsComponent = (function () {
    function TutorialsComponent() {
        this.title = "Wasif Ateeq";
        this.imglink = "http://lorempixel.com/400/200/";
        this.check = false;
        this.date = new Date();
        this.showelement = true;
        this.color = "blue";
        this.cone = true;
        this.style = "italic";
        this.colors = ['blue', 'red', 'green'];
    }
    TutorialsComponent.prototype.onClick = function (value) {
        console.log(value);
    };
    TutorialsComponent.prototype.onClicked = function () {
        this.cone = !this.cone;
    };
    TutorialsComponent = __decorate([
        core_1.Component({
            selector: 'my-tutorial',
            template: "<h2>{{title}}</h2>\n  \t\t\t<img [src]=\"imglink\"><br><br>\n  \t\t\t<input type=\"text\" value=\"angular\">\n  \t\t\t<h3>Hello blue</h3>\n  \t\t\t<div [style.color]=\"check ? 'blue' :'orange'\">Checking</div>\n  \t\t\t<button (click)=\"onClick(democlick.value)\">Click ME</button>\n  \t\t\t<input type=\"text\" #democlick>\n  \t\t\t<br>\n  \t\t\t<input type=\"text\" [(ngModel)]=\"fname\">\n  \t\t\t<input type=\"text\" [(ngModel)]=\"lname\">\n  \t\t\tFull Name :{{fname}}{{lname}}\n  \t\t\t<br>\n  \t\t\t<p *ngIf=\"showelement\">Show Element</p>\n  \t\t\t<div [ngSwitch]=\"color\">\n  \t\t\t<p *ngSwitchWhen=\"'red'\">Red Color</p>\n  \t\t\t<p *ngSwitchWhen=\"'blue'\">Blue Color</p>\n  \t\t\t<p *ngSwitchDefault>Invalid Color</p>\n  \t\t\t</div>\n  \t\t\t<ul>\n  \t\t\t<li *ngFor=\"let color of colors\">{{color}}</li>\n  \t\t\t</ul>\n  \t\t\t<p [ngClass]=\"{classOne:cone}\">NGCLASS</p>\n  \t\t\t<button (click)=\"onClicked()\">Toggle Me</button>\n  \t\t\t<p>Data from parent is </p>{{parentData}}\n  \t\t\t<p>{{date|date:\"MM/dd/yy\"}}\n  \t\t\t  \t\t\t<p>{{date|date:\"shortdate\"}}\n\n  \t\t\t",
            styles: [".classOne{\ncolor:red;\n  }"],
            inputs: ['parentData']
        }), 
        __metadata('design:paramtypes', [])
    ], TutorialsComponent);
    return TutorialsComponent;
}());
exports.TutorialsComponent = TutorialsComponent;
//# sourceMappingURL=tutorials.component.js.map