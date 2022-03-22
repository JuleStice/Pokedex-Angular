import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/authentification.service';
import { Pokemon } from '../pokemon.model';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  constructor(private auth: AuthentificationService) { }

  pokemonP?:Pokemon

  token?: string

  ngOnInit(): void {
    //this.token = this.auth.recupToken()
  }

  displayPokemon(pokemon: Pokemon){
    this.pokemonP = pokemon
  }


}
