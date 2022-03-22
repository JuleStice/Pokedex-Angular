import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthentificationService } from '../authentification.service';
import { PagedData } from './paged-data.model';
import { Pokemon } from './pokemon.model';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  constructor(private http: HttpClient, private auth : AuthentificationService) { }

  urlAPI = "http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io";



  getPokemonsInit(): Observable<PagedData<Pokemon>>{
    return this.http.get<PagedData<Pokemon>>(this.urlAPI + '/pokemons?offset=0&limit=20');
  }
  getPokemons(offset: Number): Observable<PagedData<Pokemon>>{
    return this.http.get<PagedData<Pokemon>>(this.urlAPI + '/pokemons?offset='+offset+'&limit=20');
  }
  getPokemon(id: number): Observable<Pokemon> {
    // TODO: send the message _after_ fetching the hero
    const url = this.urlAPI+ '/pokemons/'+ id ;
    return this.http.get<Pokemon>(url).pipe(tap(_=> console.log("fetched pokemon id ="+id)));
    /*return of(HEROES.find(hero => hero.id === id));*/
  }

  getPokemonBySearch(search: string): Observable<PagedData<Pokemon>>{
    return this.http.get<PagedData<Pokemon>>(this.urlAPI+ '/pokemons?search='+search);
  }

}
