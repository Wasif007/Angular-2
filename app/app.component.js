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
var forms_1 = require("@angular/forms");
var AppComponent = (function () {
    function AppComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    ;
    AppComponent.prototype.ngOnInit = function () {
        this.userForm = this._formBuilder.group({
            name: ['Wasi', [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(10)]],
            street: [],
            country: [],
            address: [],
            city: [],
            postalcode: ['', [forms_1.Validators.pattern('^[0-9][0-9]{4}')]]
        });
    };
    /*
   
      userForm=new FormGroup({
        name:new FormControl('Was',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]),
        street:new FormControl(),
        country:new FormControl(),
        postalcode:new FormControl(null,Validators.pattern('^[0-9][1-9]{4}')),
        address:new FormControl(),
        city:new FormControl()
      });
   */
    AppComponent.prototype.onSubmit = function () {
        console.log(this.userForm.value);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/app.component_2.html',
        styles: ["\n  input.ng-valid {border-left:5px solid green;}\n  input.ng-invalid {border-left:5px solid red;}\n  "]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map