import {Injectable} from '@angular/core';


@Injectable()
export class EmployeeServiceClass{
    getEmployeeData(){
        return [
            {"id":1,"name":"Wasif","address":"Gulberg"},
         {"id":2,"name":"Asif","address":"Gulberg 3"}
        ]
    }
}