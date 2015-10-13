import { Injectable, EventEmitter, Component } from 'angular2/angular2';

@Injectable()
export class PopupService {
    private isVisible: Boolean;
    private text: string;

    constructor() {
        this.isVisible = false;
        this.text = '';
    }

    public show( text: string = null ) {
        this.isVisible = true;
        this.text = text;
    }

    public hide() {
        this.isVisible = false;
        this.text = '';
    }
}
