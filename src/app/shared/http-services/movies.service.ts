import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUrl } from '../constants/app-url';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient
  ) { }

  getMovieList(params: {}): Observable<any> {
    return this.http.get(AppUrl.MOVIES, params)
  }
}
