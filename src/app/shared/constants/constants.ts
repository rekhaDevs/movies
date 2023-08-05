import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";

@Injectable()
export class AppConstants {

}

export const APIConstant = {
  EndPoint: {
    AUTH: environment.appUrl + '/api/v1/usermodule/login/'
  }
}
