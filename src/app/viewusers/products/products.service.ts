import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EcommerceUsersService implements Resolve<any>
{
    Users:any[] = [] ;
    onUsersChanged: BehaviorSubject<any>;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    )
    {
        // Set the defaults
        this.onUsersChanged = new BehaviorSubject({});
    }

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) => {

            Promise.all([
                this.getUsers()
            ]).then(
                () => {
                    resolve(true);
                },
                reject
            );
        });
    }

    /**
     * Get Users
     *
     * @returns {Promise<any>}
     */
    getUsers(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/contacts-contacts')
                .subscribe((response: any) => {
                    this.Users = response;
                    this.onUsersChanged.next(this.Users);
                    console.log( this.Users);
                    
                    resolve(response);
                }, reject);
        });
    }
}
