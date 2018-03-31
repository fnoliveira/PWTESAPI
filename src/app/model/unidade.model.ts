import { MatChipInputEvent } from '@angular/material';

import { FuseUtils } from '@fuse/utils';

import { Condomino } from './condomino.model';

export class Unidade {
    id: number;
    nome: string;
    handle: string;
    condominos: Condomino[][];
    vagas: any[];
    funcionarios: any[];
    correspondencias: any[];
    isEnable: boolean;

    constructor(unidade?) {
        unidade = unidade || {};
        this.id = unidade.id;
        this.nome = unidade.name || '';
        this.handle = unidade.handle || FuseUtils.handleize(this.nome);
        this.condominos = unidade.condominos || [];
        this.vagas = unidade.vagas || [];
        this.funcionarios = unidade.funcionarios || [];
        this.correspondencias = unidade.correspondencias || [];
        this.isEnable = unidade.active || true;
    }
}
