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
    }
    TutorialsComponent = __decorate([
        core_1.Component({
            selector: 'my-tutorial',
            template: "<h2>{{title}}</h2>\n  \t\t\t<img [src]=\"imglink\"><br><br>\n  \t\t\t<input type=\"text\" value=\"angular\">\n  \t\t\t<h3>Hello blue</h3>\n  \t\t\t<div [class.myClass]=\"check\">RED</div>\n  \t\t\t<div [style.color]=\"check ? 'blue' :'orange'\">Checking</div>\n  \t\t\t",
            styles: [".myClass {\n  color : red;\n  }"]
        }), 
        __metadata('design:paramtypes', [])
    ], TutorialsComponent);
    return TutorialsComponent;
}());
exports.TutorialsComponent = TutorialsComponent;
//# sourceMappingURL=tutorials.component.js.map