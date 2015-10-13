import { Component, View, bootstrap, bind, NgFor, NgIf } from 'angular2/angular2';
import { ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { RouterLink, RouteConfig, Router, RouterOutlet, Location, RouteParams } from 'angular2/router';
import { Login } from '../../component/login/login';
import { AddChannel } from '../../component/addChannel/addChannel';
import { Feed } from '../../component/feed/feed';
import { AuthService } from '../../services/AuthService';

@Component({
    selector: 'header-menu'
})

@View({
    templateUrl: 'assets/templates/header.html',
    directives: [RouterLink, NgFor, NgIf]
})

export class Header {
    private auth: AuthService;
    constructor( auth: AuthService ) {
        this.auth = auth;
    }
    private logout(event) {
        event.preventDefault();
        this.auth.logout();
    }
}