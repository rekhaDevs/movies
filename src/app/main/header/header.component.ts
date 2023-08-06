import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/shared/services/storage.service';
import { ThemeToggleService } from 'src/app/shared/services/theme-toggle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isDark: any;
  constructor(
    private themeToggleService: ThemeToggleService,
    private storageService: StorageService,
    private router : Router
  ){}

  ngOnInit()  {
    this.checkingTheme();
  }

  toggleDarkMode() {
    this.themeToggleService.toggleMode();
  }

  checkingTheme(){
    if(StorageService.getItem('theme') == 'dark'){
      this.isDark = true;
    }
    if(StorageService.getItem('theme') == 'light'){
      this.isDark = false;
    }
  }

  logOut(): void {
    StorageService.clearAll();
    this.router.navigateByUrl('login');
  }
}
