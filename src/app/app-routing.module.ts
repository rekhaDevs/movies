import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './pages/movies/movies-list/movies-list.component';
import { UserLoginComponent } from './pages/user/user-login/user-login/user-login.component';

const routes: Routes = [
  {path: '', component: UserLoginComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'movies', component: MoviesListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
