import { Component, Directive, View, bootstrap, bind, NgIf } from 'angular2/angular2';
import { Inject } from 'angular2/angular2';
import { ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { Router,RouteConfig,  RouterOutlet, Location, RouteParams } from 'angular2/router';
import { HTTP_BINDINGS, Http } from 'angular2/http'
import { AddChannel } from '../addChannel/addChannel';
import { Feed } from '../feed/feed';
import { ChannelList } from '../channelList/channelList';
import { Login } from '../login/login';
import { Signup } from '../signup/signup';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Popup } from '../popup/popup';
import { AuthService } from '../../services/AuthService';
//import { ConnectionService } from '../../services/ConnectionService';

@Component({
    selector: 'app'
})

@View({
    templateUrl: 'assets/templates/app.html',
    directives: [ RouterOutlet, Header, Footer, Popup, NgIf ]
})

@RouteConfig([
    { path: '/login', component: Login, as: 'login' },
    { path: '/signup', component: Signup, as: 'signup' },
    { path: '/', component: ChannelList, as: 'channelList' },
    { path: '/add', component: AddChannel, as: 'add' },
    { path: '/feed', component: Feed, as: 'allfeed' },
    { path: '/feed/:id', component: Feed, as: 'feed' }

])

export class App {
    private auth: AuthService;
    constructor(auth: AuthService) {
        this.auth = auth;
    }
}
