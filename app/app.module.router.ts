import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule,Routes} from '@angular/router';
import {RouterComponent} from  './router.class';
import {EmployeeClass} from './employeee.class';
import {DepartmentClass} from './department.class';
import {DepartmentDetailClass} from './department.detail.class';


const routes:Routes=[
    {path:'departments',component:DepartmentClass},
    {path:'employees',component:EmployeeClass},
    {path:'departments/:id',component:DepartmentDetailClass}
];

@NgModule({
    imports:[
RouterModule.forRoot(routes)
    ],
    exports:[
RouterModule
    ]

})

export class AppModuleRouter{}
export const routingComponent=[EmployeeClass,DepartmentClass,DepartmentDetailClass];
