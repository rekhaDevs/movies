import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './pages/movies/movies-list/movies-list.component';
import { UserLoginComponent } from './pages/login/user-login.component';
import { AuthGuard } from './shared/guards/auth-guard.service';

const routes: Routes = [
  {path: '', component: UserLoginComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'movies', component: MoviesListComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
