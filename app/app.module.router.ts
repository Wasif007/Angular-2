import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule,Routes} from '@angular/router';
import {RouterComponent} from  './router.class';
import {EmployeeClass} from './employeee.class';
import {DepartmentClass} from './department.class';
import {DepartmentDetailClass} from './department.detail.class';
import {HomeComponent} from './home.component';
import {PageComponent} from './page-not-found';

const routes:Routes=[
    {path:'',redirectTo:'/departments', pathMatch:'full'},
    {path:'departments',component:DepartmentClass},
    {path:'employees',component:EmployeeClass},
    {path:'departments/:id',component:DepartmentDetailClass},
    {path:"**",component:PageComponent}
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
export const routingComponent=[PageComponent,HomeComponent,EmployeeClass,DepartmentClass,DepartmentDetailClass];
