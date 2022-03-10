import { NgModule} from "@angular/core";
import {Routes, RouterModule} from '@angular/router';

import {NavbarComponent } from "./navbar/navbar.component"
import { RouterOutlet } from '@angular/router';

const routes: Routes =[
  {path: 'Français', component: NavbarComponent},
  {path: 'Anglais', component: NavbarComponent},
  {path: 'Americains', component: NavbarComponent},
  {path: 'Contact', component: NavbarComponent} 
];

@NgModule({
    imports:[RouterModule.forRoot(routes),],
    exports: [RouterModule, RouterOutlet]
})
export class ApproutingModule {}