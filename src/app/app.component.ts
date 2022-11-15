import { Component} from "@angular/core"; // OnInit : interface de cycle de vie qui permet d'initialiser notre composant
// import { POKEMONS } from "./mock-pokemon-list"; // importer la liste de pokemons depuis le fichier dce mock-pokemon-list
// import { Pokemon } from "./pokemon";

@Component({
  selector: "app-root",
  templateUrl: 'app.component.html',
  
})
export class AppComponent {
  // pokemonList: Pokemon[] = POKEMONS; //attribuer à la proprièté pokemonList, la valeur de la constante POKEMONS
  // pokemonSelected: Pokemon | undefined;

  // ngOnInit() {
  //   console.table(this.pokemonList);
  //   //this.selectPokemon(this.pokemonList[0]); //appeler pokemonList, et lui passer le pokemon à l'indique 0 par exemple
  // }

  // selectPokemon(pokemonId : string) {
  //   const pokemon : Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
  //   if(pokemon) {
  //     console.log(` Vous avez demandé un pokémon ${pokemon.name} `);
  //     this.pokemonSelected = pokemon;
  //   } else {
  //     console.log(` Vous avez demandé un pokemon qui n'existe pas `);
  //     this.pokemonSelected = pokemon;
  //   }
  // }
}
