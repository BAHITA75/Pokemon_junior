import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { LoaderComponent } from './loader/loader.component';
import { AuthGuard } from '../auth.guard';

const pokemonRoutes: Routes = [
  { path: 'edit/pokemon/:id', component: EditPokemonComponent, canActivate: [AuthGuard]},
  { path: 'pokemon/add', component: AddPokemonComponent, canActivate: [AuthGuard] },
  { path: 'pokemons', component: ListPokemonComponent, canActivate: [AuthGuard]},
  { path: 'pokemon/:id', component: DetailPokemonComponent, canActivate: [AuthGuard]},
];

@NgModule({
  declarations: [ // se sont les classes de vues qui appartiennent à ce module (composant, directives et pipes)
    BorderCardDirective,
    PokemonTypeColorPipe,
    ListPokemonComponent,
    DetailPokemonComponent,
    PokemonFormComponent,
    EditPokemonComponent,
    AddPokemonComponent,
    SearchPokemonComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule, //angular importe par defaut CommonModule, il s'agit d'une base qui comprend les directives structurelles ngIf et ngFor
    FormsModule, // pour rendre disponible et utiliser les directive ngForm et ngModels dans nos composant
    RouterModule.forChild(pokemonRoutes),
  ],

  providers: [
    PokemonService // passer le service PokemonService dans le providers de pokemon.module eu lieu dans l'injecteur racine @Injectable, pour qu'il soit utilisable seulment dans le module pokemon
  ]
})
export class PokemonModule { }
