import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/tokens';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) { }

  urlAPI = "http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io";

  createAccount(mail: string, password: string){
   return this.http.post<any>(this.urlAPI+'/trainers',{"email":mail,"password":password});
  }

  login(mail: string, password: string): Observable<Token>{
    return this.http.post<Token>(this.urlAPI+'/auth/login', {"email":mail,"password":password});
  }
}
