import { Injectable, EventEmitter, Component } from 'angular2/angular2';
import { Http, Headers } from 'angular2/http';
import { LocalStorage } from '../helper/LocalStorage';
import { ConnectionService } from './ConnectionService';

@Injectable()
export class AuthService {

    public baseApi: string = 'https://rssreader-md.herokuapp.com';
    private http: Http;
    private loggedInUserName: string;
    private connect: ConnectionService;

    constructor(http: Http, connect: ConnectionService) {
        this.http = http;
        this.connect = connect;
        if(!!LocalStorage.token){
            this.loggedInUserName = window.jwt_decode(LocalStorage.token).name;
        }
    }

    public isAuth(): Boolean {
        return !!LocalStorage.token;
    }

    public get decodedToken(): Object {
        if(!!LocalStorage.token) {
            return window.jwt_decode(LocalStorage.token);
        }
        return null;
    }

    public serialize(obj) {
        var prefix = null;
        var str = [];
        for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
                var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
                str.push(typeof v == "object" ?
                    this.serialize(v) :
                encodeURIComponent(k) + "=" + encodeURIComponent(v));
            }
        }
        return str.join("&");
    }

    public login(username, password): Promise<any> {
        var header: Headers = new Headers();
        header.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        return new Promise((resolve, reject) => {
            if(this.connect.isConnected) {
                this.http['post'](this.baseApi+'/api/auth',
                    this.serialize({name:username, password: password}),
                    {
                        headers: header
                    })
                    .toRx()
                    .map(res => res.json())
                    .subscribe(res => {
                        //this.token = res.token;,
                        if(res['success']) {
                            if(!!res.token){
                                LocalStorage.token = res.token;
                            }
                            this.loggedInUserName = window.jwt_decode(LocalStorage.token).name;
                            resolve(res);
                        }else{
                            reject(res);
                        }
                    }
                );
            }else{
                reject(this.connect.noInternetMessage);
            }
        });
    }

    public signup(username, password): Promise<any> {
        var header: Headers = new Headers();
        header.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        return new Promise((resolve, reject) => {
            if(this.connect.isConnected) {
                this.http['post'](this.baseApi + '/api/register',
                    this.serialize({name: username, password: password}),
                    {
                        headers: header
                    })
                    .toRx()
                    .map(res => res.json())
                    .subscribe(res => {
                        if (res['success']) {
                            resolve(res);
                        } else {
                            reject(res);
                        }
                    }
                );
            }else{
                reject(this.connect.noInternetMessage);
            }
        });
    }

    public logout() {
        LocalStorage.removeToken();
        this.loggedInUserName = null;
    }
}