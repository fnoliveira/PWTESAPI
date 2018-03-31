import { MatChipInputEvent } from '@angular/material';

import { FuseUtils } from '@fuse/utils';

export class Endereco {

    id: number;
    cep: string;
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    uf: string;
    pais: string;
    isEnable: boolean;


    constructor(endereco?) {
        endereco = endereco || {};
        this.id = endereco.id;
        this.cep = endereco.cep || '';
        this.logradouro = endereco.logradouro || '';
        this.numero = endereco.numero || '';
        this.complemento = endereco.complemento || '';
        this.bairro = endereco.bairro || '';
        this.cidade = endereco.cidade || '';
        this.uf = endereco.uf || '';
        this.pais = endereco.pais || '';
        this.isEnable = endereco.isEnable || true;
    }
}
