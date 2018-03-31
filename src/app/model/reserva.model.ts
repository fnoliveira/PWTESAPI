import { MatChipInputEvent } from '@angular/material';

import { FuseUtils } from '@fuse/utils';

export class Reserva {

    id: number;
    title: string;
    description: string;
    start: number[];
    end: number[];
    isEnable: boolean;

    constructor(reserva?) {
        reserva = reserva || {};
        this.id = reserva.id;
        this.title = reserva.title || '';
        this.description = reserva.description || '';
        this.start = reserva.start || 0;
        this.end = reserva.end || 0;
        this.isEnable = reserva.isEnable || true;
    }
}
