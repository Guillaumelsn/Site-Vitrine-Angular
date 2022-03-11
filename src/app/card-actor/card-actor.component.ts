import { Component, OnInit  } from '@angular/core';
import acteurJson from "../../assets/Data/acteur-francais.json"

interface Acteurs {
  nameActor: string; 
  imageUrl: string; 
  description: string;
  big: boolean;
}
@Component({
  selector: 'app-card-actor',
  templateUrl: './card-actor.component.html',
  styleUrls: ['./card-actor.component.scss']
})



export class CardActorComponent {
  // big!: boolean; 
  acteur: Acteurs[] = acteurJson;
  displayFilm(acteur: any){
    const card = document.getElementById("card");
    if (acteur.big == false) {
      acteur.big = true;
      card!.style.height = "90em";

    } else {
      acteur.big = false;
      card!.style.height = "27em";
    }
    // const card = document.getElementsByClassName('card');

    // document.getElementById('chevron')?.classList.add('rotation'); 
    // card?.classList.add('active');

  }
}



