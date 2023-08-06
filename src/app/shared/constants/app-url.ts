import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";

@Injectable()
export class AppUrl {
  static get API_URL(): string {
    return environment.appUrl + '/api/';
  }

  static get AUTH(): string {
    return AppUrl.API_URL + 'v1/usermodule/login/';
  }

  static get MOVIES(): string {
    return AppUrl.API_URL + 'v1/maya/movies/';
  }
}
