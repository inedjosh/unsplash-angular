import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  error: string = ''
  loading: boolean = false

    loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private auth: AuthService) {

  }

 onSubmit() {

   if (this.loginForm.value.email === '' || this.loginForm.value.password === '') {
     this.error = 'Please enter a valid email and password'
   }

   this.auth.SignIn(this.loginForm.value.email as string, this.loginForm.value.password as string)

 }

  loginWithGoogle() {
    this.auth.GoogleAuth()
  }

  ngOnInt(){}
}
