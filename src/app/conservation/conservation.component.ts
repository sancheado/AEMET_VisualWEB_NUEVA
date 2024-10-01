import { Component } from '@angular/core';
import { opcionesGrupo2 } from '../app-constants';

@Component({
    selector: 'module-conservation',
    templateUrl: './conservation.component.html',
    styleUrls: ['../specific-predictions/specific-predictions.component.css']

})
export class ConservationComponent {

    cards = [
        { title: opcionesGrupo2[0].option, explication: opcionesGrupo2[0].explication, contentToChange: opcionesGrupo2[0].contentToChange },
        { title: opcionesGrupo2[1].option, explication: opcionesGrupo2[1].explication, contentToChange: opcionesGrupo2[1].contentToChange },
        { title: opcionesGrupo2[2].option, explication: opcionesGrupo2[2].explication, contentToChange: opcionesGrupo2[2].contentToChange },
    ];

    cardGroups: any[][] = [];

    constructor(
    ) { }

    ngOnInit(): void {
        console.log('cards:', this.cards);
    }

}
