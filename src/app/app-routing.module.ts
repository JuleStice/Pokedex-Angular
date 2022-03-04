import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { PokedexComponent } from './pokemons/pokedex/pokedex.component';


const routes: Routes = [
  { path: '', redirectTo: '/authentification', pathMatch: 'full' },
  { path: 'pokedex', component: PokedexComponent },
  { path: 'authentification', component: AuthentificationComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

