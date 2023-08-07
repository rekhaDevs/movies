import { HttpClient, HttpParams } from '@angular/common/http';
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

  getMovieList(params: number): Observable<any> {
    let reqData = new HttpParams();
    reqData = reqData.append('page', params); 
    return this.http.get(AppUrl.MOVIES, {params: reqData})
  }
}
