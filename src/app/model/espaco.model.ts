import { MatChipInputEvent } from '@angular/material';

import { FuseUtils } from '@fuse/utils';

import { Reserva } from './reserva.model';

export class Espaco {

    id: number;
    nome: string;
    handle: string;
    descricao: string;
    lotacao: number;
    isPermiteInadimplente: boolean;
    isPermiteReserva: boolean;
    reservas: Reserva[];
    isEnable: boolean;

    constructor(espaco?) {
        espaco = espaco || {};
        this.id = espaco.id || FuseUtils.generateGUID();
        this.nome = espaco.name || '';
        this.handle = espaco.handle || FuseUtils.handleize(this.nome);
        this.descricao = espaco.descricao || '';
        this.lotacao = espaco.lotacao || 1;
        this.isPermiteInadimplente = espaco.isPermiteInadimplente || false;
        this.reservas = espaco.reservas || [];

        this.isEnable = espaco.active || true;
    }

}
