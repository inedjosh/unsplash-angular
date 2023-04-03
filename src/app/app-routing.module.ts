import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddImageComponent } from './pages/add-image/add-image.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: '', title: 'Home', component: HomeComponent },
  { path: 'register', title: 'Register', component: RegisterComponent },
  { path: 'login', title: 'Login', component: LoginComponent },
  { path: 'profile', title: 'Profile', component: ProfileComponent, canActivate: [AuthGuard]  },
  { path: 'add-image', title: 'Add Image', component: AddImageComponent, canActivate: [AuthGuard]  },
  { path: '**', title: '404', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [RegisterComponent, LoginComponent, ProfileComponent,AddImageComponent, HomeComponent]
