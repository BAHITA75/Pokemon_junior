import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {


  message: string = 'Vous êtes déconnecté (pikachu/pikachu)';
  name:string;
  password: string;
  auth: AuthService; //Je déclare ainsi mon service car je l'utilise directement dans mon Template

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){

    this.auth = this.authService
  }

  setMessage(){

    if(this.auth.isLoggedIn){
      this.message = "Vous êtes connecté"
    }else{
      this.message = 'Identifiant ou mot de passe incorrect'
    }
  }

  login(){

    this.message = 'Tentative de connexion encours...';

    this.auth.login(this.name, this.password)
      .subscribe((isLoggedIn: boolean)=>{//je vais recevoir une reponse qui sera un booléen puis je vais mettre à jour "=>{}" mon App
          this.setMessage();//En fonction de connecté ou non(SetMessage)

          if(isLoggedIn){

              this.router.navigate(['/pokemons'])//je redirige vers la page des Pokémons

          }else{

            this.password= '';//réinitialiser le password
            this.router.navigate(['login'])
          }
      })
  }

  logout(){

    this.auth.logout();
    this.message ='Vous êtes déconnecté'
  }

}
