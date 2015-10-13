import { Component, View, bootstrap, bind, NgIf } from 'angular2/angular2';
import { PopupService } from '../../services/PopupService';

@Component({
    selector: 'popup'
})

@View({
    templateUrl: 'assets/templates/popup.html',
    directives: [ NgIf ]
})

export class Popup {
    private text: string;
    private popup: PopupService;

    constructor( popup: PopupService ) {
        this.text = '';
        this.popup = popup;
    }
}