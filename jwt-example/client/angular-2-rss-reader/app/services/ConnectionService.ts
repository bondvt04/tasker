import { Injectable, EventEmitter, Component } from 'angular2/angular2';

import {Location, Router} from 'angular2/router';

@Injectable()
export class ConnectionService {
    public isConnected: boolean;
    public noInternetMessage: Object = { message: 'no internet connection' };

    constructor() {
        this.isConnected = true;

        document.addEventListener("online", () => {
            this.isConnected = true;
            console.log('online');
        }, false);

        document.addEventListener("offline",() => {
            this.isConnected = false;
            console.log('offline');
        }, false);


        //@TODO add location back
        document.addEventListener("backbutton", () => {
            console.log('backbutton');
        }, false);

        //there is no navigator.connection.type in browser
        try {
            this.isConnected = (navigator.connection.type !== Connection.NONE);
        }
        catch(error) {
            console.warn(error.message)
        }
    }
}
