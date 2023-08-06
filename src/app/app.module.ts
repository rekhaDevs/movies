import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './pages/login/user-login.component';
import { HttpClientModule} from '@angular/common/http';
import { MoviesListComponent } from './pages/movies/movies-list/movies-list.component';
import { NgToastModule } from 'ng-angular-popup';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinLoaderComponent } from './shared/components/spin-loader/spin-loader.component';
import {ThemeToggleService} from "./shared/services/theme-toggle.service";
import {StorageService} from "./shared/services/storage.service";
import { HeaderComponent } from './main/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    MoviesListComponent,
    SpinLoaderComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule

  ],
  providers: [
    StorageService,
    ThemeToggleService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
