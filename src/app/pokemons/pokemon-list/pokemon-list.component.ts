import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PagedData } from '../paged-data.model';
import { Pokemon } from '../pokemon.model';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PokemonService } from '../pokemon.service';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons?:PagedData<Pokemon>;
  infiniteScroll?: InfiniteScrollModule;
  pokemonD?:Pokemon;
  search?:string;
  @Output() pokeEvent = new EventEmitter<Pokemon>()

  constructor(private pokemonService: PokemonService, private teamService: TeamService) { }

  ngOnInit(): void {

    this.initPokemon();
  }

  onScroll(e: InfiniteScrollModule){
    console.log('scrolled!!');
    this.infiniteScroll = e;

    if (this.pokemons){
      this.pokemonService.getPokemons(this.pokemons.offset).subscribe(pokemon => {

        this.pokemons= {
          data: this.pokemons?.data.concat(pokemon.data) ?? [],
          offset: pokemon.offset + pokemon.limit,
          limit:pokemon.limit
         }

      console.log("TAB"+this.pokemons?.data);
      });

    console.log("OFFSET"+this.pokemons.offset);
    }
  }

  initPokemon(){
      this.pokemonService.getPokemonsInit().subscribe(pokemon =>{
      this.pokemons= pokemon;
      this.pokemons.offset += this.pokemons.limit;
      });
    }


  onChange(search: string) {
    if (search.length >0){
      this.pokemonService.getPokemonBySearch(search).subscribe(pokemon => this.pokemons = pokemon);
    }
    else {
     this.initPokemon();
    }
    console.log(search)

  }
  clickPokemon(pokemon: Pokemon){

    this.pokeEvent.emit(pokemon)
  }

  addPokemon(pokemon: Pokemon){
    console.log(pokemon)
    this.teamService.addPokemonList(pokemon.id);
  }

}
