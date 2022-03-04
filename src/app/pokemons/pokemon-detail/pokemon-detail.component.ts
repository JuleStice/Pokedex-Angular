import { Location } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon.model';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnChanges {

  constructor(private route: ActivatedRoute, private pokService: PokemonService, private location:Location) { }

  @Input() pokemon?: Pokemon;

  getPokemon(){
    //const id = Number(this.route.snapshot.paramMap.get('id'));
    const id = this.pokemon?.id;
    if (id){
      this.pokService.getPokemon(id).subscribe(pokemon => this.pokemon = pokemon);
    }
  }



  playPokemonSound(id: number){
    new Audio(`../../../assets/audio/${id}.mp3`).play()
  }

  goBack(){
    this.location.back();
  }

  ngOnChanges(): void {
    this.getPokemon();
  }

}
