import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nation-card',
  templateUrl: './nation-card.component.html',
  styleUrls: ['./nation-card.component.scss']
})
export class NationCardComponent implements OnInit {

  title!: string;
  subtitle!: string;
  span!: string;
  description!:string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  imageUrl2!: string;
  imageUrl3!: string;
  imageUrl1!: string;
  buttonText!: string;

  ngOnInit(): void {
    this.title = "Acteurs Francais";
    this.subtitle = "Présentation de nos acteurs"
    this.span = "francais"
    this.description = "Lorem ipsum dolor sit amet. In voluptatem nesciunt qui animi voluptas quo molestias omnis. Aut Quis dignissimos ut quasi recusandae et officia error sit delectus alias. Est perferendis voluptas ut earum maiores est galisum porro aut reprehenderit consequatur est dignissimos nulla est voluptatem dolores sed rerum laboriosam."
    this.imageUrl = 'https://www.francetvinfo.fr/pictures/e9DNEeBj10fPYRrhmAiOX9sVbSw/1200x1200/2019/04/12/000_dv2034104.jpg';
    this.imageUrl1 = 'https://i.pinimg.com/736x/56/e4/47/56e4479cd175737cd9e67537ffc81dbe.jpg';
    this.imageUrl2 = 'https://www.gala.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fgal.2Fvar.2Fgal.2Fstorage.2Fimages.2Fmedia.2Fimages.2Factu.2Fphotos_officiel.2Fdaniel_auteuil.2F537702-1-fre-FR.2Fdaniel_auteuil.2Ejpg/420x420/quality/80/daniel-auteuil-est-l-acteur-francais-le-mieux-paye.jpg';
    this.imageUrl3 = 'https://resize-public.ladmedia.fr/img/var/public/storage/images/news/macron-j-aimerais-bien-lui-peter-la-gueule-un-acteur-francais-tacle-le-president-en-direct-du-festival-de-cannes-1680159/44408776-1-fre-FR/Macron-j-aimerais-bien-lui-peter-la-gueule-un-acteur-francais-tacle-le-president-en-direct-du-Festival-de-Cannes.jpg';
    this.buttonText = "Oh Snaps !";
  }


}
