import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import {User}  from '../model/user';

@Injectable()
export class UserService
{

url:string;
addUrl:string;

constructor(private httpmodule:HttpClient)
{
this.url='http://localhost:8081/getUser';
this.addUrl='http://localhost:8081/addUser';
}

getMessage():Observable<any>
{
    console.log(this.url);
   return this.httpmodule.get(this.url);


}
addUser(user:User){

    console.log("add User url= " +this.url);
    return this.httpmodule.post(this.addUrl,user)
      ;
}
}