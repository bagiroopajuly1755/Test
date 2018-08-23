import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../rest/userservice';

import {User}  from '../model/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  errorMessage:string;

  constructor(private userService:UserService, public router: Router) { 

  }

  ngOnInit() {
  
  }

  register() {
    this.userService.addUser(this.user);//.(data => {
       // this.router.navigate(['/profile']);
     // }
    //)
  }

}
