import { MatChipInputEvent } from '@angular/material';

import { FuseUtils } from '@fuse/utils';

import { Unidade } from './unidade.model';

export class Bloco {
    id: number;
    nome: string;
    handle: string;
    unidades: Unidade[];
    isEnable: boolean;

    constructor(bloco?) {
        bloco = bloco || {};
        this.id = bloco.id;
        this.nome = bloco.name || '';
        this.handle = bloco.handle || FuseUtils.handleize(this.nome);
        this.unidades = bloco.unidades || [];
        this.isEnable = bloco.isEnable || true;
    }

}
