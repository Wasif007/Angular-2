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
var DepartmentDetailClass = (function () {
    function DepartmentDetailClass(router, routers) {
        this.router = router;
        this.routers = routers;
    }
    DepartmentDetailClass.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (paramss) {
            var id = parseInt(paramss['id']);
            _this.departmentId = id;
        });
    };
    DepartmentDetailClass.prototype.ngPrevious = function () {
        var previousId = this.departmentId - 1;
        this.routers.navigate(['/departments', previousId]);
    };
    DepartmentDetailClass.prototype.ngNext = function () {
        var nextId = this.departmentId + 1;
        this.routers.navigate(['/departments', nextId]);
    };
    return DepartmentDetailClass;
}());
DepartmentDetailClass = __decorate([
    core_1.Component({
        template: "<h4>deparment Detail Area</h4>\n                Department id is {{departmentId}}\n                <br>\n                <a (click)=\"ngPrevious()\">Previous</a>\n                <a (click)=\"ngNext()\">Next</a>\n                ",
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
], DepartmentDetailClass);
exports.DepartmentDetailClass = DepartmentDetailClass;
//# sourceMappingURL=department.detail.class.js.map