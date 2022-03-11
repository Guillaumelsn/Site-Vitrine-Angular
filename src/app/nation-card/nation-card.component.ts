import { Component, OnInit } from '@angular/core';
import nationPll  from '../data-nation.json';

interface Nationnalite  {
  id: string;
  title: string;
  subtitle: string;
  span: string;
  description:string;
  imageUrl: string;
  imageUrl2: string;
  imageUrl3: string;
  imageUrl1: string;
  buttonText: string;
}

@Component({
  selector: 'app-nation-card',
  templateUrl: './nation-card.component.html',
  styleUrls: ['./nation-card.component.scss']
})

export class NationCardComponent implements OnInit {
  constructor() {}
  
  nationnalites: Nationnalite[] = nationPll;
  
  ngOnInit(): void {
    
  }
  



}
