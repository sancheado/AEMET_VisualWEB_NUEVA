import { Component } from '@angular/core';

@Component({
  selector: 'app-specific-predictions',
  templateUrl: './specific-predictions.component.html',
  styleUrls: ['./specific-predictions.component.css']
})
export class SpecificPredictionsComponent {

  cards = [
    { title: '0', content: 'día actual' },
    { title: '1', content: 'd+1 (mañana)' },
    { title: '2', content: 'd+2 (pasado mañana)' },
    { title: '3', content: 'd+3 (dentro de 3 días)' },
    { title: '4', content: 'd+4 (dentro de 4 días)' },
    { title: '5', content: 'd+4 (dentro de 4 días)' },
    { title: '6', content: 'd+4 (dentro de 4 días)' },
    { title: '7', content: 'd+4 (dentro de 4 días)' },
    { title: '8', content: 'd+4 (dentro de 4 días)' },
    { title: '9', content: 'd+4 (dentro de 4 días)' },
    { title: '10', content: 'd+4 (dentro de 4 días)' },
    { title: '11', content: 'd+4 (dentro de 4 días)' },
    { title: '12', content: 'd+4 (dentro de 4 días)' },
    { title: '13', content: 'd+4 (dentro de 4 días)' },
    { title: '14', content: 'd+4 (dentro de 4 días)' },
    { title: '15', content: 'd+4 (dentro de 4 días)' },
  ];
  cardGroups: any[][] = [];

  constructor(
  ) { }

  ngOnInit(): void {
    console.log('cards:', this.cards);
  }

}
