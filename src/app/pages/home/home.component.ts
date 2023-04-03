import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  loggedIn: boolean = false

   constructor(private auth: AuthService) {

  }

  ngOnInt() {
    this.loggedIn = this.auth.isLoggedIn
    console.log(this.loggedIn);
   }

}
