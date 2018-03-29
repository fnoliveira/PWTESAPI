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
            this.http.get('http://localhost:9090/condominio/')
                .subscribe((response: any) => {
                    console.log(response);
                    this.condominios = response;
                    this.onCondominiosChanged.next(this.condominios);
                    resolve(response);
                }, reject);
        });
    }
}
