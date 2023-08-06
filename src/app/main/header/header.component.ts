import { Component, OnInit } from '@angular/core';
import { ThemeToggleService } from 'src/app/shared/services/theme-toggle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private themeToggleService: ThemeToggleService
  ){}

  ngOnInit()  {

  }

  toggleDarkMode() {
    this.themeToggleService.toggleMode();
  }
}
