import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AuthentificationService } from '../authentification.service';
import { Pokemon } from './pokemon.model';
import { PokemonService } from './pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private pokemonService: PokemonService,private auth: AuthentificationService,private http: HttpClient) { }

  myTeamPokemonNum: number[] = []
  TeamPokemon: Pokemon[] = []

  MAX_VALUE_TEAM = 6

  private teamChange = new Subject<string>();
  teamChange$ = this.teamChange.asObservable();

  /*création d'un objet vide si jamais je voulais afficher les elements vides */
  pokeZero : Pokemon = {
    id: 0,
    name: "Vide",
    description: "Vide",
    height: 0,
    weight : 0,
    types : ['Vide']
  }

/*Fonction qui me servais uniquement
si je voulais afficher les entités vides de mon équipe, chose que je ne fais plus*/
  remplirNum(tab: Pokemon[]): Pokemon[]{
      if(tab.length< this.MAX_VALUE_TEAM)
      {
        const add = this.MAX_VALUE_TEAM -tab.length;
        for(var i=0;i<add;i++){
          tab.push(this.pokeZero)
        }
      }
    return tab
  }


  getMyTeam(): Observable<any>{
    return this.http.get<any>(this.pokemonService.urlAPI+'/trainers/me/team',{
      headers: new HttpHeaders({'Authorization':'Bearer '+this.auth.accessToken})
    });
  }

  setMyTeam(num: number[]): Observable<Number>{
    return this.http.put<number>(this.pokemonService.urlAPI+'/trainers/me/team',num,{
      headers: new HttpHeaders({'Authorization':'Bearer '+this.auth.accessToken})

    });
  }
  
addPokemonList(id: number){
  if(this.myTeamPokemonNum.length<this.MAX_VALUE_TEAM)
  {
    this.myTeamPokemonNum.push(id);
    this.setMyTeam(this.myTeamPokemonNum).subscribe(data => this.teamChangeAnnouncement("add"));
  }
  else{
    alert("Ajout impossible, vous avez déjà 6 pokemons dans votre team");
  }
}

removePokemonList(index: number){
  console.log("index " +index);
  console.log(this.myTeamPokemonNum);
  console.log(this.myTeamPokemonNum[index]);
    this.myTeamPokemonNum.splice(index,1);
    this.setMyTeam(this.myTeamPokemonNum).subscribe(data => this.teamChangeAnnouncement("remove"));

}

  teamChangeAnnouncement(change: string) {
    this.teamChange.next(change);
  }


}
