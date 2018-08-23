import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {UserService} from './rest/userservice';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
  { path: 'profile', component: UserComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({ 
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,RouterModule.forRoot(appRoutes),
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
