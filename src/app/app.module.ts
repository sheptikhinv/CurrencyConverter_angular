import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeAppComponent } from './pages/home-app/home-app.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { CookieService } from 'ng2-cookies';

@NgModule({
  declarations: [
    AppComponent,
    HomeAppComponent,
    NotfoundComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [CookieService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
