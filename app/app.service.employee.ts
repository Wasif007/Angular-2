import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class EmployeeServiceClass{

    private _url:string ='apidata/employeeDatas.json';
    constructor(private _http:Http){}
    getEmployeeData(){
        return this._http.get(this._url)
        .map((response:Response)=>response.json());
    }
}