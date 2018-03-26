import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MeuCondominioCondominiosService implements Resolve<any>
{
    condominios: any[];
    onCondominiosChanged: BehaviorSubject<any> = new BehaviorSubject({});

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

        return new Promise((resolve, reject) => {

            Promise.all([
                this.getCondominios()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    getCondominios(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get('api/e-commerce-products')
                .subscribe((response: any) => {
                    this.condominios = response;
                    this.onCondominiosChanged.next(this.condominios);
                    resolve(response);
                }, reject);
        });
    }
}
