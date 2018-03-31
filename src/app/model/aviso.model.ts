import { MatChipInputEvent } from '@angular/material';

import { FuseUtils } from '@fuse/utils';

export class Aviso {

    destinatario: string;
    titulo: string;
    aviso: string;
    anexo?: any;
    isUrgente: boolean;
    isFixo: boolean;
    isEnable: boolean;
    start?: string;
    end?: string;
    id: number;
    handle: string;

    constructor(aviso?) {
        aviso = aviso || {};
        this.id = aviso.id;
        this.destinatario = aviso.destinatario || '';
        this.handle = aviso.handle || FuseUtils.handleize(this.titulo);
        this.titulo = aviso.titulo || '';
        this.anexo = aviso.anexo || '';
        this.isUrgente = aviso.isUrgente || false;
        this.isFixo = aviso.isFixo || false;
        this.start = aviso.start || '';
        this.end = aviso.end || '';
        this.isEnable = aviso.isEnable || true;
    }

}
