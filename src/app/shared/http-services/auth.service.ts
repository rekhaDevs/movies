import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AppUrl} from "../constants/app-url";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) {
  }

  authenticateUser(data: any): Observable<any> {
    return this.http.post(AppUrl.AUTH, data)
  }
}
