import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon.model';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  constructor() { }

  pokemonP?:Pokemon

  ngOnInit(): void {
  }


  displayPokemon(pokemon: Pokemon){
    this.pokemonP = pokemon
  }
}
