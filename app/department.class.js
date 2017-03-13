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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var DepartmentClass = (function () {
    function DepartmentClass(router) {
        this.router = router;
        this.departments = [
            { "id": 1, "name": "Angular" },
            { "id": 2, "name": "Node" },
            { "id": 3, "name": "MongoDb" }
        ];
    }
    DepartmentClass.prototype.ngSelect = function (deparment) {
        this.router.navigate(['/departments', deparment.id]);
    };
    return DepartmentClass;
}());
DepartmentClass = __decorate([
    core_1.Component({
        selector: 'deparment-class',
        template: "<h4>deparment Area</h4>\n  <ul class=\"items\">\n  <li (click)=\"ngSelect(deparment)\" *ngFor=\"let deparment of departments\">\n  <span class=\"badge\">{{deparment.id}}</span> {{deparment.name}}\n  </li>\n  </ul>\n  \n  ",
    }),
    __metadata("design:paramtypes", [router_1.Router])
], DepartmentClass);
exports.DepartmentClass = DepartmentClass;
//# sourceMappingURL=department.class.js.map