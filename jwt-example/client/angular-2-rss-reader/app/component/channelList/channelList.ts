import { Component, View, bootstrap, bind, NgFor, NgIf } from 'angular2/angular2';
import { RouterLink, RouteConfig, Router, RouterOutlet, Location, RouteParams } from 'angular2/router';
import { RssService } from '../../services/RssService';
import { AuthService } from '../../services/AuthService';
import { PopupService } from '../../services/PopupService';

@Component({
    selector: 'channel-list'
})

@View({
    templateUrl: 'assets/templates/channelList.html',
    directives: [RouterLink, NgFor, NgIf]
})

export class ChannelList {
    private name: String;
    private rss: RssService;
    private auth: AuthService;
    private popup: PopupService;
    private router: Router;

    constructor( rss: RssService, auth: AuthService,  router: Router, popup: PopupService ) {
        this.rss = rss;
        this.auth = auth;
        this.popup = popup;
        this.router = router;
    }

    /**
     * @desc remove channel and load new channel list
     * @param event
     * @param channel {Channel}
     */
    private removeChannel(event, channel) {
        event.preventDefault();
        this.popup.show('Please Wait');
        this.rss.removeChannel(channel._id).then(() => {
            this.rss.loadChannels().then(() =>  this.popup.hide() );
        })
        .catch( error => {
            this.popup.hide();
            alert(error.message);
        });
    }

    private onInit() {
        console.log('onInit()');
        if(this.auth.isAuth()) {
            this.popup.show('Please Wait');
            this.rss.loadChannels().then(() => this.popup.hide())
            .catch( error => {
                this.popup.hide();
                alert(error.message);
            });
        }else{
            this.router.parent.navigate('/login');
        }
    }

    private onDestroy() {
        console.log('onDestroy()');
        this.popup.hide();
    }
}
