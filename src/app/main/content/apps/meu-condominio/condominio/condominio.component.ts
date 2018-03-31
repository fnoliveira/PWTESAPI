import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
import { Subscription } from 'rxjs/Subscription';

import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';

import { Condominio } from './../../../../../model/condominio.model';
import { MeuCondominioCondominioService } from './../../../../../service/meu-condominio.condominio.service';
import { Location } from '@angular/common';

@Component({
    selector: 'fuse-meu-condominio-condominio',
    templateUrl: './condominio.component.html',
    styleUrls: ['./condominio.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class FuseCondominioComponent implements OnInit, OnDestroy {
    condominio = new Condominio();
    onCondominioChanged: Subscription;
    pageType: string;
    condominioForm: FormGroup;

    constructor(
        private condominioService: MeuCondominioCondominioService,
        private formBuilder: FormBuilder,
        public snackBar: MatSnackBar,
        private location: Location
    ) {
    }

    ngOnInit() {
        // Subscribe to update product on changes
        this.onCondominioChanged =
            this.condominioService.onCondominioChanged
                .subscribe(condominio => {

                    if (condominio) {
                        this.condominio = new Condominio(condominio);
                        this.pageType = 'edit';
                    }
                    else {
                        this.pageType = 'new';
                        this.condominio = new Condominio();
                    }

                    this.condominioForm = this.createCondominioForm();
                });
    }

    ngOnDestroy() {
        this.onCondominioChanged.unsubscribe();
    }

    createCondominioForm() {
        return this.formBuilder.group({
            id: [this.condominio.id],
            nome: [this.condominio.pessoa.nome],
            handle: [this.condominio.handle],
            cpf_cnpj: [this.condominio.pessoa.cpfOuCnpj],
            tipoCondominio: [this.condominio.tipoCondominio],
            finalidade: [this.condominio.finalidade]
            
        });
    }

    saveCondominio() {
        const data = this.condominioForm.getRawValue();
        data.handle = FuseUtils.handleize(data.nome);
        this.condominioService.saveCondominio(data)
            .then(() => {

                // Trigger the subscription with new data
                this.condominioService.onCondominioChanged.next(data);

                // Show the success message
                this.snackBar.open('condominio saved', 'OK', {
                    verticalPosition: 'top',
                    duration: 2000
                });
            });
    }

    addCondominio() {
        const data = this.condominioForm.getRawValue();
        data.handle = FuseUtils.handleize(data.nome);
        this.condominioService.addCondominio(data)
            .then(() => {

                // Trigger the subscription with new data
                this.condominioService.onCondominioChanged.next(data);

                // Show the success message
                this.snackBar.open('Condominio added', 'OK', {
                    verticalPosition: 'top',
                    duration: 2000
                });

                // Change the location with new one
                this.location.go('apps/meu-condominio/condominios/' + this.condominio.id + '/' + this.condominio.handle);
            });
    }
}
