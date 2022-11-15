import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  // providers: [PokemonService], // on peut aussi utiliser un service dans un composant precis comme ceci, mais ça arrive rarement.
})

export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute, //le service ActivateRoute permet d'acceder aux informations de mon URL
    private router: Router, // le service Router permet de rediriger une page via sa methode navigate(), cette dernière prend l'url en paramètre.
    private pokemonService : PokemonService //ce service qu'on a créé nous meme, nous permet d'accéder à ses methodes declérées, qu'on en a définies
  ) { }

  ngOnInit() {

    const pokemonId: string | null= this.route.snapshot.paramMap.get('id');
    
    if(pokemonId) {
      // this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);  on va chercher le pokemon par Id avec un service, juste en dessous
      //this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
      this.pokemonService.getPokemonById(+pokemonId)
        .subscribe(pokemon => this.pokemon = pokemon);
    } 
  }

  deletePokemon(pokemon: Pokemon) {
    this.pokemonService.deleletePokemonById(pokemon.id)
      .subscribe(() => this.goTopokemonList());
  }

  goTopokemonList() {
    this.router.navigate(['/pokemons']);
    //la methode navigate() prend l'url en paramètre sous forme d'un tableau
  }

  goToEditPokemon(pokemon: Pokemon) {
    this.router.navigate(['/edit/pokemon', pokemon.id]);
  }

}
