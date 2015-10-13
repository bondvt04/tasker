import { Component, Directive, View, bootstrap, bind } from 'angular2/angular2';
import { ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { Router, RouteConfig,  RouterOutlet, Location, RouteParams } from 'angular2/router';
import { HTTP_BINDINGS, Http } from 'angular2/http';

import { RssService } from './services/RssService';
import { AuthService } from './services/AuthService';
import { ParserService } from './services/ParserService';
import { PopupService } from './services/PopupService';
import { ConnectionService } from './services/ConnectionService';

import { App } from './component/app/app';

const APP_BINDINGS = [
    ROUTER_BINDINGS,
    ROUTER_BINDINGS,
    HTTP_BINDINGS,
    ConnectionService,
    RssService,
    AuthService,
    ParserService,
    PopupService
];

bootstrap(App, [ APP_BINDINGS, bind(LocationStrategy).toClass(HashLocationStrategy)]);