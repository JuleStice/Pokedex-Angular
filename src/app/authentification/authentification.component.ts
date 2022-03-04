import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {

  constructor(private authService: AuthentificationService) { }

  mail ?: string;
  pwd ?: string;
  ngOnInit(): void {
  }

  signUp(mail:string, password: string){
    this.authService.createAccount(mail,password).subscribe(res => {console.log(res)});
    this.mail= mail;
    this.pwd= password;
  }

  login(mail:string, password: string){
    this.authService.login(mail, password).subscribe(res => {console.log(res)});
  }

}
