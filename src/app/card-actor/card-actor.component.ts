import { Component, OnInit  } from '@angular/core';
import acteurJson from "../../assets/Data/acteur-francais.json"

interface Acteurs {
  nameActor: string; 
  imageUrl: string; 
  description: string; 
 
}
@Component({
  selector: 'app-card-actor',
  templateUrl: './card-actor.component.html',
  styleUrls: ['./card-actor.component.scss']
})

export class CardActorComponent implements OnInit {
  big!: boolean;
  acteur: Acteurs[] = acteurJson;
   
  
  ngOnInit(): void {}

  displayFilm(){
    const card = document.getElementById('card');

    if(this.big == false){
      card!.style.height = "50em";
      this.big = true; 
      document.getElementById('chevron')?.classList.add('rotation'); 

    }else{
      card!.style.height = "27em";
      this.big = false; 
      document.getElementById('chevron')?.classList.remove('rotation');
    }
  }
}



