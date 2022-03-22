import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../authentification.service';
import { PokemonService } from '../pokemons/pokemon.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {

  constructor(private authService: AuthentificationService, private router: Router, private pokemonService: PokemonService) { }

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
    this.authService.login(mail, password).subscribe(res => {
      console.log(res);
      this.authService.accessToken = res.access_token
      this.router.navigateByUrl("/pokedex");
    });


  }



}
