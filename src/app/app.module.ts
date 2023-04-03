import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/home/header/header.component';
import { MaterialModule } from './material/material.module';
import { TabComponent } from './components/home/tab/tab.component';
import { ImageDivComponent } from './components/home/image-div/image-div.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './shared/services/auth.service';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    AppComponent,
   routingComponents,
    PageNotFoundComponent,
    HeaderComponent,
    TabComponent,
    ImageDivComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
 providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
