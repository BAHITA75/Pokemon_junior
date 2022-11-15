import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  { path: '**', component: PageNotFoundComponent} //cette route permet nous deririger vers une page d'erreur 404, si l'URL n'existe pas
  // cette route, faut toujours la declarer à la fin, parceque angular lis les routes de haut en bas, sinon toutes les pages de notre application, afficheraient un message d'erreur
  // '**' cet operateur permet d'intercepter toutes les URLs qui n'existent pas.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
