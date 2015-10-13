import { Component,Directive, View, EventEmitter, CORE_DIRECTIVES } from 'angular2/angular2';
import { FORM_DIRECTIVES, ControlGroup, FormBuilder } from 'angular2/angular2';
import { Validators } from 'angular2/angular2';
import { Router, RouteParams } from 'angular2/router';
import { TypeValidators } from '../../helper/TypeValidators';
import { RssService, Channel } from '../../services/RssService';
import { PopupService } from '../../services/PopupService';
import { AuthService } from '../../services/AuthService';

@Component({
    selector: 'add-channel',
    viewBindings: [FormBuilder]
})

@View({
    templateUrl: 'assets/templates/addChannel.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class AddChannel {
    private id: string;
    private rss: RssService;
    private auth: AuthService;
    private popup: PopupService;
    private router: Router;
    private addForm: ControlGroup;

    constructor(rss: RssService, popup: PopupService, auth: AuthService, router: Router, fb: FormBuilder) {
        this.rss = rss;
        this.auth = auth;
        this.popup = popup;
        this.router = router;
        this.addForm = fb.group({
            name: ['', Validators.required],
            channel: ['', Validators.compose([ Validators.required, TypeValidators.url ])]
        });
    }

    private addChannel(event) {
        event.preventDefault();
        var form = this.addForm.value;
        this.popup.show('Please Wait');
        this.rss.loadChannelData(form.channel).then( () => {
           this.rss.addChannel(form.channel, form.name).then( () => {
               this.popup.hide();
               alert('channel added');
           })
           .catch( error => {
               this.popup.hide();
               alert(error.message);
           });
        })
        .catch( error => {
            this.popup.hide();
            alert(error.message);
        });

        this.addForm.controls['name'].updateValue('');
        this.addForm.controls['channel'].updateValue('');
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