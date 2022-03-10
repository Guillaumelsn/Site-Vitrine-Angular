import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import { NationCardComponent } from './nation-card/nation-card.component';
import { HttpClientModule} from "@angular/common/http";
import { CardActorComponent } from './card-actor/card-actor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
//import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    NationCardComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
    CardActorComponent
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
   // RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
