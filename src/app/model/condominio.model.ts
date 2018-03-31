import { MatChipInputEvent } from '@angular/material';

import { FuseUtils } from '@fuse/utils';

import { Pessoa } from './pessoa.model';
import { Bloco } from './bloco.model';
import { Espaco } from './espaco.model';
import { Aviso } from './aviso.model';

export class Condominio {

    pessoa: Pessoa;
    finalidade: string;
    tipoCondominio: string;
    isEnable: boolean;
    id: number;
    blocos: Bloco[];
    espacos: Espaco[];
    funcionarios: any[];
    avisos: Aviso[];
    handle: string;

    constructor(condominio?) {
        condominio = condominio || {};
        this.id = condominio.id;
        this.pessoa = condominio.pessoa || Pessoa;
        this.handle = condominio.handle;
        this.finalidade = condominio.finalidade || '';
        this.tipoCondominio = condominio.tipoCondominio || '';
        this.blocos = condominio.blocos || [];
        this.espacos = condominio.espacos || [];
        this.funcionarios = condominio.funcionarios || [];
        this.avisos = condominio.avisos || [];
        this.isEnable = condominio.isEnable || true;
    }
}
