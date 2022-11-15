import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Pokemon } from "../pokemon";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-pokemon-form",
  templateUrl: "./pokemon-form.component.html",
  styleUrls: ["./pokemon-form.component.css"],
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon;
  types: string[];
  isAddForm: boolean;

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypeLIst();
    this.isAddForm = this.router.url.includes("add"); //verifier l'url au cas d'ajout d'un pokemon
  }

  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string) {
    const isChecked = ($event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }

  isTypesValid(type: string): boolean {
    if (this.pokemon.types.length == 1 && this.hasType(type)) {
      return false;
    }

    if (this.pokemon.types.length > 2 && !this.hasType(type)) {
      return false;
    }

    return true;
  }

  onSubmit() {
    // console.log('Submit form !');
    // this.router.navigate(['pokemon', this.pokemon.id]);
    if (this.isAddForm) {
      // si isAddForm est true ça veut dans l'url existe une string 'add', ça veut dire je suis le ca d'ajout d'un pokemon
      this.pokemonService
        .addPokemon(this.pokemon)
        .subscribe((pokemon: Pokemon) => this.router.navigate(['/pokemon', pokemon.id]));
    } else {
      // sinon je suis le cas de modification d'un pokemon
      this.pokemonService
        .updatePokemon(this.pokemon)
        .subscribe(() => this.router.navigate(["/pokemon", this.pokemon.id]));
    }
  }
}
