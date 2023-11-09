import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

title: string = "Esto es un texto" /* Este texto es el button original */ 
changeText(){ /*Esta funcion genera un cambio en el texto con "oneclick" */
  this.title= "Este texto cambio" /* Para llamar un txt se busca con "this" */
}
}
