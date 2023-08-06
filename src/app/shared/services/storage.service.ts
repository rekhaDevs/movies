import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class StorageService {
  constructor() {
  }

  static getItem(key: string) {
    return localStorage.getItem(key) ? JSON.parse(<string>localStorage.getItem(key)) : null;
  }


  static setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static removeItem(key: string) {
    localStorage.removeItem(key);
  }

  static clearAll() {
    localStorage.clear();
  }
}
