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
var app_service_employee_1 = require("./app.service.employee");
var EmployeeDataDetail = (function () {
    function EmployeeDataDetail(_empl) {
        this._empl = _empl;
        this.employess = [];
    }
    EmployeeDataDetail.prototype.ngOnInit = function () {
        var _this = this;
        this._empl.getEmployeeData().subscribe(function (empDatas) { return _this.employess = empDatas; });
    };
    return EmployeeDataDetail;
}());
EmployeeDataDetail = __decorate([
    core_1.Component({
        selector: 'employee-data-detail',
        template: "<h2>Wasif Ateeq<h2>\n  <ul *ngFor=\"let emplo of employess\">\n  <li>{{emplo.name}} {{emplo.id}}</li>\n  <ul>"
    }),
    __metadata("design:paramtypes", [app_service_employee_1.EmployeeServiceClass])
], EmployeeDataDetail);
exports.EmployeeDataDetail = EmployeeDataDetail;
//# sourceMappingURL=employee.data.detail.js.map