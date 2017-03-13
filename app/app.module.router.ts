import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule,Routes} from '@angular/router';
import {RouterComponent} from  './router.class';
import {EmployeeClass} from './employeee.class';
import {DepartmentClass} from './department.class';


const routes:Routes=[
    {path:'departments',component:DepartmentClass},
    {path:'employees',component:EmployeeClass}
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
export const routingComponent=[EmployeeClass,DepartmentClass];
