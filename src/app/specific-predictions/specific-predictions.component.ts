import { Component } from '@angular/core';
import { opcionesGrupo1 } from '../app-constants';

@Component({
  selector: 'app-specific-predictions',
  templateUrl: './specific-predictions.component.html',
  styleUrls: ['./specific-predictions.component.css']
})
export class SpecificPredictionsComponent {

  cards = [
    { title: opcionesGrupo1[0].option, explication: opcionesGrupo1[0].explication, contentToChange: opcionesGrupo1[0].contentToChange },
    { title: opcionesGrupo1[1].option, explication: opcionesGrupo1[1].explication, contentToChange: opcionesGrupo1[1].contentToChange },
    { title: opcionesGrupo1[2].option, explication: opcionesGrupo1[2].explication, contentToChange: opcionesGrupo1[2].contentToChange },
    { title: opcionesGrupo1[3].option, explication: opcionesGrupo1[3].explication, contentToChange: opcionesGrupo1[3].contentToChange },
    { title: opcionesGrupo1[4].option, explication: opcionesGrupo1[4].explication, contentToChange: opcionesGrupo1[4].contentToChange },
    { title: opcionesGrupo1[5].option, explication: opcionesGrupo1[5].explication, contentToChange: opcionesGrupo1[5].contentToChange },
    { title: opcionesGrupo1[6].option, explication: opcionesGrupo1[6].explication, contentToChange: opcionesGrupo1[6].contentToChange }
  ];

  cardGroups: any[][] = [];

  constructor(
  ) { }

  ngOnInit(): void {
    console.log('cards:', this.cards);
  }

}
