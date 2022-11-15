import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PokemonModule } from './pokemon/pokemon.module';
import { InMemoryDataService } from './in-memory-data.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  //le decorateur NgModule, prend en paramètre un objet avec des propriétés qui decrivent le module
  // il y'a en tout 5 propriétés : declarations, exports, imports, providers et bootstrap
  declarations: [
    // se sont les classes de vues qui appartiennent à ce module (composant, directives et pipes)
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
  ],
  imports: [
    //concerne toutes les classes exportées depuis d'autres modules, se sont les classes necessairs au fonctionnement du module
    BrowserModule,
    FormsModule, // pour rendre disponible et utiliser les directive ngForm et ngModels dans nos composant
    HttpClientModule, //librairie fournie par angular, permet de requeter des serveurs distants
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false}),
    PokemonModule, //PokemonModule faut qu'il soit au dessus de AppRoutingModule sinon angular intercepte uniquement l'erreur 404 qui est au dessus des autres routes
    AppRoutingModule,
  ],
  providers: [], //permet de fournir les services et les injections de dependance au module
  bootstrap: [AppComponent], //cette propriété conserne que le module racine, il faut y renseigner le composant racine (AppComponent)
})
export class AppModule {}
