import { NgModule} from "@angular/core";
import {Routes, RouterModule} from '@angular/router';

import {NavbarComponent } from "./navbar/navbar.component"
import { RouterOutlet } from '@angular/router';
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { NationCardComponent } from "./nation-card/nation-card.component";

const routes: Routes =[
  {path: 'Contact', component: ContactFormComponent} 
];

@NgModule({
    imports:[RouterModule.forRoot(routes),],
    exports: [RouterModule, RouterOutlet]
})
export class ApproutingModule {}