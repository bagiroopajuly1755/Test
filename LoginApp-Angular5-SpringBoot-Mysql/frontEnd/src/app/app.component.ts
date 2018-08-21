import { Component,OnInit  } from '@angular/core';
import {UserService} from './rest/app.rest.userservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularDemoProject';

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
