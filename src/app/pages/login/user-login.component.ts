import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {Router} from '@angular/router';
import {AuthService} from 'src/app/shared/http-services/auth.service';
import {AlertService} from 'src/app/shared/services/alert-service.service';
import {ThemeToggleService} from "../../shared/services/theme-toggle.service";


@Component({
  selector: 'app-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup | any;
  isSubmitted: boolean = false;

  constructor(
    private AuthService: AuthService,
    private router: Router,
    private alert: AlertService,
    private themeToggleService: ThemeToggleService
  ) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  onSubmit() {
    this.isSubmitted = true;
    const reqData = {
      ...this.loginForm.value
    };

    if (this.loginForm.invalid) {
      return;
    }
    this.AuthService.authenticateUser(reqData)
      .subscribe((data) => {
          if (data) {
            this.isSubmitted = false;
            // this.globalService.setAccessToken(data.token);
            // this.globalService.setSelf(data.user);
            this.router.navigate(['/movies'])
          }
        },
        (error) => {
          this.isSubmitted = false;
          this.alert.popToaster('error', 'Invalid Credentials', error.error.message, {duration: 5000})

        });
  }

  toggle() {
    this.themeToggleService.toggleMode();
  }

}
