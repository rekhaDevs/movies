import {DOCUMENT} from "@angular/common";
import {Inject, Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {StorageService} from "./storage.service";

/** enum for two Mode types */
export enum Mode {
  LIGHT = "light",

  DARK = "dark",
}

@Injectable()
export class ThemeToggleService {
  private currentMode: Mode = Mode.LIGHT;
  private modeChangedSubject = new BehaviorSubject(this.currentMode);
  modeChanged$: Observable<Mode>;
  LOCAL_STORAGE_KEY = 'theme';

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {
    this.modeChanged$ = this.modeChangedSubject.asObservable();
    this.init();
  }

  /**
   * Function to mutate the currentMode
   * @param mode Mode
   */
  private updateCurrentMode(mode: Mode) {
    this.currentMode = mode;
    this.modeChangedSubject.next(this.currentMode);
    StorageService.setItem(this.LOCAL_STORAGE_KEY, this.currentMode);
  }

  private init() {
    const deviceMode = window.matchMedia("(prefers-color-scheme: light)");
    let initMode = StorageService.getItem(this.LOCAL_STORAGE_KEY);
    if (!initMode) {
      deviceMode.matches ? (initMode = Mode.DARK) : (initMode = Mode.LIGHT);
    }
    this.updateCurrentMode(initMode);
    this.document.body.classList.add(this.currentMode);
  }

  toggleMode() {
    this.document.body.classList.toggle(Mode.LIGHT);
    this.document.body.classList.toggle(Mode.DARK);
    if (this.currentMode === Mode.LIGHT) {
      this.updateCurrentMode(Mode.DARK);
    } else {
      this.updateCurrentMode(Mode.LIGHT);
    }
  }
}
