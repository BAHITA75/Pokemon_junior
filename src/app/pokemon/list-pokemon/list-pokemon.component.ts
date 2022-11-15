import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Pokemon } from "../pokemon";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-list-pokemon",
  templateUrl: "./list-pokemon.component.html",
})
export class ListPokemonComponent implements OnInit {
  
  pokemonList: Pokemon[];
  // pokemonList: Pokemon[] = POKEMONS; //attribuer à la proprièté pokemonList, la valeur de la constante POKEMONS

  constructor(
    private router: Router,
    private pokemonService: PokemonService //on recupère une instance unique de notre service PokemonService, ensuite utilisée dans toute l'application
  ) {}

  ngOnInit() {
    // this.pokemonList = this.pokemonService.getPokemonList();
    //j'accède à mes pokemon via la methode getPokemonList() qui est une methode du service PokemonService
    this.pokemonService.getPokemonList()
      .subscribe(pokemonList => this.pokemonList = pokemonList);

  }

  // redirection vers la page pokemon detail
  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(["/pokemon", pokemon.id]);
  }
}
