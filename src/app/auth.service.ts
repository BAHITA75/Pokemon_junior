import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  redirectUrl: string;

  login(name:string, password: string) : Observable<boolean> {

    const isLoggedIn = (name == 'pikachu' && password =='pikachu');

    return of(isLoggedIn).pipe(

      delay(1000),//simuler delai de 1 seconde pour pallier la lenteur d'execution du serveur
      
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)

    );

  }

  logout(){


      this.isLoggedIn = false; //donc pas connécté

  }

}
