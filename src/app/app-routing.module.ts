import { NgModule} from "@angular/core";
import {Routes, RouterModule} from '@angular/router';

import {NavbarComponent } from "./navbar/navbar.component"
import { RouterOutlet } from '@angular/router';
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { NationCardComponent } from "./nation-card/nation-card.component";
import { AppComponent } from "./app.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { CardActorComponent } from "./card-actor/card-actor.component";

export const routes: Routes =[
  {path: 'Contact', component: ContactFormComponent},
  {path: 'cardsdesrip', component: CardActorComponent},
  {path: '', component: LandingPageComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes),],
    exports: [RouterModule, RouterOutlet]
})
export class ApproutingModule {}