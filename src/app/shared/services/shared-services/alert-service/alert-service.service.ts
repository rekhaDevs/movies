import { Injectable } from '@angular/core';
import {NgToastService} from "ng-angular-popup";


@Injectable({
  providedIn: 'root'
})
export class AlertService{

  constructor(private toast: NgToastService) { }

  popToaster(type: string, title = 'Error', message: string, config = {}) {
    switch (type) {
      case 'info':
        // this.toastr.info(message, title);
        break;
      case 'error':
        this.toast.error({detail: title, summary: message});
        // this.toastr.error(message, title);
        break;
      case 'success':
        this.toast.success({detail: title, summary: message});
        // this.toastr.success(message, title);
        break;
    }
  }
}
