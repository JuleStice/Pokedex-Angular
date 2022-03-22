import { Component, OnInit } from '@angular/core';
import { switchMap,tap } from 'rxjs/operators';
import { Pokemon } from '../pokemon.model';
import { PokemonService } from '../pokemon.service';

import { forkJoin, Observable } from 'rxjs';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})


export class TeamComponent implements OnInit {


  myTeamPokemon: Pokemon[] = []

  constructor(private pokemonService: PokemonService,private teamService: TeamService) { }


  ngOnInit(): void {
    this.teamService.getMyTeam().subscribe(res2=>{
      this.teamService.myTeamPokemonNum = res2;
      this.getTeamById();
      this.teamService.teamChange$.subscribe(
        data => {
          this.getTeamById();
      });
    });
  }

  removeItemAll(arr: number[], value : number) {
    var i = 0;
    while (i < arr.length) {
      if (arr[i] === value) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    return arr;
  }

  removePokemon(index:number){
    this.teamService.removePokemonList(index);
  }

  getTeamById(): void{

    this.myTeamPokemon = [];
    this.removeItemAll(this.teamService.myTeamPokemonNum,0)
    this.teamService.getMyTeam().pipe(
      switchMap(tabId => {
        const pokemonObservables : Observable<Pokemon>[] = tabId.map((id: number) => this.pokemonService.getPokemon(id))
        return forkJoin(pokemonObservables);
      })
    ).subscribe(arrayPokemons => this.myTeamPokemon = arrayPokemons)
  }

}

