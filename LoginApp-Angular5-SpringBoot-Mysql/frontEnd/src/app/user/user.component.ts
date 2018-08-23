import { Component, OnInit } from '@angular/core';
import {UserService} from '../rest/userservice';
import {User}  from '../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users :any[];
  constructor(private userService:UserService)
  {
  }
 
  ngOnInit() {
   this.userService.getMessage().subscribe(
           data => { this.users = data})
             console.log(this.users);
          
  }

}
