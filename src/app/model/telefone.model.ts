import { MatChipInputEvent } from '@angular/material';

import { FuseUtils } from '@fuse/utils';

export class Telefone {

    id: number;
    tipo: string;
    ddd: string;
    numero: string;
    isEnable: boolean;

    constructor(telefone?) {
        telefone = telefone || {};
        this.id = telefone.id;
        this.tipo = telefone.tipo || '';
        this.ddd = telefone.ddd || '';
        this.numero = telefone.numero || '';

        this.isEnable = telefone.active || true;
    }

}
