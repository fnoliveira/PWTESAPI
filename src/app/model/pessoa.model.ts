import { MatChipInputEvent } from '@angular/material';

import { FuseUtils } from '@fuse/utils';
import { Endereco } from './endereco.model';
import { Contato } from './contato.model';

export class Pessoa {
    id: number;
    nome: string;
    handle: string;
    tipoPessoa: string;
    cpfOuCnpj: string;
    user?: any;
    enderecos: Endereco[];
    contatos: Contato[];
    cpfOuCnpjSemFormatacao: string;

    constructor(pessoa?) {
        pessoa = pessoa || {};
        this.id = pessoa.id;
        this.nome = pessoa.nome || '';
        this.handle = pessoa.handle || FuseUtils.handleize(this.nome);
        this.tipoPessoa = pessoa.tipoPessoa || '';
        this.cpfOuCnpj = pessoa.cpfOuCnpj || '';
        this.user = pessoa.user;
        this.enderecos = pessoa.enderecos || [];
        this.contatos = pessoa.contatos || [];
        this.cpfOuCnpjSemFormatacao = pessoa.cpfOuCnpjSemFormatacao || '';

    }

}
