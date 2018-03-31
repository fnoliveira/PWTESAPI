import { MatChipInputEvent } from '@angular/material';

import { FuseUtils } from '@fuse/utils';
import { Telefone } from './telefone.model';

export class Contato {

    id: number;
    tipo: string;
    email: string;
    telefones: Telefone[];

    constructor(contato?) {
        contato = contato || {};
        this.id = contato.id;
        this.tipo = contato.tipo || '';
        this.email = contato.email || '';
        this.telefones = contato.telefones || [];
    }

}
