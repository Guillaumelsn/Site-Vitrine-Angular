import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-card-actor',
  templateUrl: './card-actor.component.html',
  styleUrls: ['./card-actor.component.scss']
})

export class CardActorComponent implements OnInit {

  nameActor!: string; 
  imageUrl!: string; 
  description!: string; 
  big!: boolean; 
  
  ngOnInit() {
    this.nameActor = 'Dwayne Johnson';
    this.imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Dwayne_Johnson_2014_%28cropped%29.jpg';
    this.description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eum dolorum id neque doloribus perspiciatis blanditiis officia asperiores, sint, aperiam sunt earum vel voluptate recusandae ipsa nulla corrupti veniam dicta.'
    this.big = false; 
  }

  displayFilm(){
    const card = document.getElementById('card');

    if(this.big == false){
      card!.style.height = "50em";
      this.big = true; 
      document.getElementById('chevron')?.classList.add('rotation'); 

    }else{
      card!.style.height = "25em";
      this.big = false; 
      document.getElementById('chevron')?.classList.remove('rotation');
    }
  }
}



