import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatChipsModule } from '@angular/material/chips';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonsRoutingModule } from './pokemon-routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PokedexComponent } from './pokedex/pokedex.component';
import {MatFormFieldModule,} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { TeamComponent } from './team/team.component';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
    TeamComponent,
    PokedexComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    MatIconModule,
    MatSidenavModule,
    PokemonsRoutingModule,
    InfiniteScrollModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,

    FormsModule
  ]
})
export class PokemonsModule { }
