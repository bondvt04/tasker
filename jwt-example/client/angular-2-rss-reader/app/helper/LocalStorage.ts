import {} from 'angular2/angular2';

export class LocalStorage {
    static tokenName: string = 'jwttoken';

    static get token(): string {
        return localStorage.getItem(this.tokenName);
    }

    static set token(str: string) {
        localStorage.setItem(this.tokenName, str);
    }

    static removeToken() {
        localStorage.removeItem(this.tokenName);
    }
}