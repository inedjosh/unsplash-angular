import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

    error: string = ''

   registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private auth: AuthService) {

  }

 onSubmit() {
  if (this.registerForm.value.email === '' || this.registerForm.value.password === '') {
     this.error = 'Please enter a valid email and password'
  }

   this.auth.SignUp(this.registerForm.value.email as string, this.registerForm.value.password as string)
 }

    loginWithGoogle() {
    this.auth.GoogleAuth()
  }

  ngOnInt(){}
}
