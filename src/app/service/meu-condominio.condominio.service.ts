import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MeuCondominioCondominioService implements Resolve<any>
{
    routeParams: any;
    condominio: any;
    condominios: any[];
    onCondominioChanged: BehaviorSubject<any> = new BehaviorSubject({});

    constructor(
        private http: HttpClient
    ) {
    }

    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

        this.routeParams = route.params;

        return new Promise((resolve, reject) => {

            Promise.all([
                this.getCondominio()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    getCondominio(): Promise<any> {
        return new Promise((resolve, reject) => {
            if (this.routeParams.id === 'new') {
                this.onCondominioChanged.next(false);
                resolve(false);
            }
            else {
                this.http.get('api/e-commerce-products/' + this.routeParams.id)
                    .subscribe((response: any) => {
                        this.condominio = response;
                        this.onCondominioChanged.next(this.condominio);
                        resolve(response);
                    }, reject);
            }
        });
    }

    saveCondominio(condominio) {
        return new Promise((resolve, reject) => {
            this.http.post('api/e-commerce-products/' + condominio.id, condominio)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    addCondominio(condominio) {
        return new Promise((resolve, reject) => {
            this.http.post('api/e-commerce-products/', condominio)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }
}
