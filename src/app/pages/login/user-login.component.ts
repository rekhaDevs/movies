import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/http-services/auth.service';
import { AlertService } from 'src/app/shared/services/alert-service.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { ThemeToggleService } from 'src/app/shared/services/theme-toggle.service';


@Component({
  selector: 'app-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit{
  loginForm: FormGroup | any;
  isSubmitted: boolean = false;
  isError: boolean= false;
  isLoading: boolean= false;

  constructor(
    private AuthService: AuthService,
    private router: Router,
    private alert: AlertService,
    private themeToggleService: ThemeToggleService,
    private storageService: StorageService
  ) {
      }

  ngOnInit() {
    if (StorageService.getItem('accessToken')) {
      StorageService.setItem('accessToken', StorageService.getItem('accessToken'))
    }
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
        this.isLoading =true;
        if (data && data.is_success) {
           this.isSubmitted = false;
            this.isLoading =false;

          StorageService.setItem('accessToken', data.data.token);
          this.router.navigate(['/movies'])
        }     
        },
        (error) => {
          if(!error.error.is_success){  //basically wrong credentials error but haven't had any other key
          this.isLoading =false;
          this.isSubmitted = false;
          this.isError = true;
          }
          else{
            this.alert.popToaster('error', 'Try Again', error?.error?.error?.message, {duration: 5000} )
          }
        });
  }
}
