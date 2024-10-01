import { Component } from '@angular/core';
import { opcionesGrupo3 } from '../app-constants';

@Component({
    selector: 'climatologic-values',
    templateUrl: './climatologic-values.component.html',
    styleUrls: ['../specific-predictions/specific-predictions.component.css']
})
export class ClimatologicValuesComponent {

    cards = [
        { title: opcionesGrupo3[0].option, explication: opcionesGrupo3[0].explication, contentToChange: opcionesGrupo3[0].contentToChange },
        { title: opcionesGrupo3[1].option, explication: opcionesGrupo3[1].explication, contentToChange: opcionesGrupo3[1].contentToChange },
        { title: opcionesGrupo3[2].option, explication: opcionesGrupo3[2].explication, contentToChange: opcionesGrupo3[2].contentToChange },
        { title: opcionesGrupo3[3].option, explication: opcionesGrupo3[3].explication, contentToChange: opcionesGrupo3[3].contentToChange },
        { title: opcionesGrupo3[4].option, explication: opcionesGrupo3[4].explication, contentToChange: opcionesGrupo3[4].contentToChange },
        { title: opcionesGrupo3[5].option, explication: opcionesGrupo3[5].explication, contentToChange: opcionesGrupo3[5].contentToChange },
        { title: opcionesGrupo3[6].option, explication: opcionesGrupo3[6].explication, contentToChange: opcionesGrupo3[6].contentToChange }
    ];

    cardGroups: any[][] = [];

    constructor(
    ) { }

    ngOnInit(): void {
        console.log('cards:', this.cards);
    }

}
