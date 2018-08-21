import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class UserService
{

url:string;

constructor(private httpmodule:HttpClient)
{
this.url='http://localhost:8081/add';
}

getMessage():Observable<any>
{
    console.log(this.url);
   return this.httpmodule.get(this.url);


}
}