import { Component } from '@angular/core';

@Component({
  selector: 'page-404',
  template: `
  <div class='center'>
    <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"/>
    <h1>Hey, cette page n'existe pas !</h1>
    <a routerLink="/pokemons" class="waves-effect waves-teal btn-flat">
    <!-- routerLink permet de nous rediriger vers page d'acceuil, c'est une autre manière d'angular de faire une redirection (une directive) -->
      Retourner à l' accueil
    </a>
  </div>
`
})
export class PageNotFoundComponent {}
