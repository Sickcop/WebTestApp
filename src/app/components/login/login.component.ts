import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiConnectionService } from 'src/app/service/api-connection.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  data: any = [];

  constructor(private Router: Router, private apiService: ApiConnectionService){}

  login(){
    const username= document.querySelector("#userInput") as HTMLInputElement;
    const usernameValue = username.value;
    const password= document.querySelector("#passwordInput") as HTMLInputElement;
    const passwordValue= password.value;
    this.apiService.getAllData();
    this.Router.navigate(["/home"])
    
  }
}
