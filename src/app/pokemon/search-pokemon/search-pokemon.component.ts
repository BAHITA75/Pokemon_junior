import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
})
export class SearchPokemonComponent implements OnInit {

  searchTerms = new Subject<string>(); //la classe Subject de rxJs permet de stocker des recherhces successives de l'utilisateur, dans un tableau de chaines de caractères
  //(ce'st un flux de données dans le temps des recherches de l'utilisateur), {...'a'...'ab'...'abz'...'ab'...'abc'....}
  // {...pokemonList(a)...pokemonList(ab)....}
  pokemons$: Observable<Pokemon[]>;

  constructor(
    private router: Router,
    private pokemonService : PokemonService
  ) { }

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
    // avec l'operateur pipe, on effectue une serie de transformation,  on transforme els lettres tappées en pokemons
    //{...'a'.'ab'...'abz'.'ab'....'abc'....}
    debounceTime(300), 
    //debouncetime est un operateur de rxJs qui permet d'eliminer des recherches qui n'ont pas au moins 300ms d'attente aprés
    // donc le nouveau flux de recherche est : {...'ab'...'ab'....'abc'....}
    distinctUntilChanged(), // distinctUntilChanged est un operateur rxJs permet d'éliminer les flux aprés changement, ça veut dire les doublons
    // le nouveau flux de recherche est : {...'ab'.......'abc'....}
    switchMap((term) => this.pokemonService.searchpokemonList(term))
    // concatMap / mergeMap / switchMap : permet de renvoyer un flux de pokemons
    // resultats : {...pokemonList(ab)....pokemonList(abc)....}
    );
    
  }

  search(term: string) {
    this.searchTerms.next(term); // la methode next() permet de pousser le terme de recherche tapé dans la recherche et le rajouter dans le fulx de données
    // on va obtenir ce flux en sortie : {...'a'...'ab'...'abz'...'ab'...'abc'....}
  }

  goToDetail(pokemon: Pokemon) {
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}
