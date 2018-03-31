import { MatChipInputEvent } from '@angular/material';

import { FuseUtils } from '@fuse/utils';
import { Pessoa } from './pessoa.model';
import { Reserva } from './reserva.model';

export class Condomino {
    id: number;
    pessoa: Pessoa;
    animais: any[];
    isProprietario: boolean;
    reservas: Reserva[];
    isEnable: boolean;

    constructor(condomino?) {
        condomino = condomino || {};
        this.id = condomino.id;
        this.pessoa = condomino.name || Pessoa;
        this.animais = condomino.animais || [];
        this.isProprietario = condomino.isProprietario || false;
        this.reservas = condomino.reservas || [];
        this.isEnable = condomino.isEnable || true;
    }
}
