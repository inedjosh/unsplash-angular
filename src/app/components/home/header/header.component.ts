import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  links = [
    {
      text: 'explore',
      link: '#',

    },
    {
      text: 'Advertise',
      link: '#',

    },
    {
      text: 'Unsplash',
      link: '#',

    },
  ]

   constructor(public auth: AuthService) {}
  ngOnInit(): void { }

  logout() {
    this.auth.SignOut()
  }

}
