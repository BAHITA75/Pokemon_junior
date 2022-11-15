import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'; //ajouter une interface InMemoryDbService qui va nous demander d'implemanter une methode pour simuler notre base de donnée
import { POKEMONS } from './pokemon/mock-pokemon-list';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pokemons = POKEMONS;
    return { pokemons };
  }
}
