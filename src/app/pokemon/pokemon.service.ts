import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable() //({ //le decorateur Injectable permet d'indiquer à angular que notre service pokemon.service peut lui meme avoir d'autres dependances
  //providedIn: 'root' // cette propriété permet d'indiquer à angular qu'on veut utiliser la meme instance du service à travers toute l'application
  // autrement dit, on fournit notre service PokemonService à l'ensemble de l'application grace à l'injecteur racine qui s'appelle 'Root', 
  // donc immediatement notre service est disponible partout 
//})

export class PokemonService {

  constructor(
    private http: HttpClient
  ) {}

  getPokemonList(): Observable<Pokemon[]> {
    // return POKEMONS;
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );  
  }

  getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
    // return POKEMONS.find(pokemon => pokemon.id == pokemonId);
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  searchpokemonList(term: string): Observable<Pokemon[]> {
    if (term.length < 2 ) {
      return of([]);
    } else {
      return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, []))
      );
    }
  }

  updatePokemon(pokemon: Pokemon) :Observable<null> { 
    const httpOptions = {
      headers : new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers : new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deleletePokemonById(pokemonId: number): Observable<null> {
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    )
  }

  private log(reponse: any) {
    console.table(reponse);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

  getPokemonTypeLIst(): string[] {
    return ['Plante', 
      'Feu', 
      'Eau', 
      'Insecte', 
      'Normal', 
      'Electrik', 
      'Poison', 
      'Fée', 
      'Vol', 
      'Combat', 
      'Psy'
    ];
  }
}
