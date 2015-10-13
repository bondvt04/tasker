import { Component,Directive, View, EventEmitter, NgFor, NgIf } from 'angular2/angular2';
import { Router, RouteParams } from 'angular2/router';
import { RssService, Channel } from '../../services/RssService';
import { PopupService } from '../../services/PopupService';
import { AuthService } from '../../services/AuthService';

@Component({
    selector: 'feed'
})

@View({
    templateUrl: 'assets/templates/feed.html',
    directives: [NgFor, NgIf]
})

export class Feed {
    private id: string;
    private rss: RssService;
    private popup: PopupService;
    private auth: AuthService;
    private router: Router;
    private channel: Channel = new Channel();

    constructor(params: RouteParams, rss: RssService, auth: AuthService, router: Router, popup: PopupService) {
        this.rss = rss;
        this.auth = auth;
        this.router = router;
        this.popup = popup;
        this.id = params['get']('id');

        (!!this.id) ? this.loadChannelById() : this.loadAllFeed();
    }

    private loadChannelById() {
        this.popup.show('loading channel');
        this.rss.getChannelById(this.id).then( resp => {
            this.rss.loadChannelData(resp.link).then( channel => {
                this.popup.hide();
                this.channel = channel;
            });
        })
        .catch( error => {
            this.popup.hide();
            alert(error.message);
        })
    }

    private loadAllFeed() {
        this.popup.show('loading all feed');
        this.rss.loadChannels().then( resp => {
            this.rss.loadAllChannelsData(resp).then( allFeed => {
                this.popup.hide();
                this.channel = allFeed;
            })
            .catch( error => {
                this.popup.hide();
                alert(error.message);
            })
        })
        .catch( error => {
            this.popup.hide();
            alert(error.message);
        })
    }

    private openLink(event, str: string) {
        event.preventDefault();
        if(!!window.cordova) {
           window.open(str, '_blank', 'location=yes,zoom=no');
        }else{
           window.open(str, '_blank');
        }
    }

    private onInit() {
        if(!this.auth.isAuth()) {
            this.router.parent.navigate('/login');
        }
    }

    private onDestroy() {
        this.popup.hide();
    }
}