import { Component, View, bootstrap, bind, NgIf } from 'angular2/angular2';
import { RouterLink } from 'angular2/router';

@Component({
    selector: 'footer-menu'
})

@View({
    templateUrl: 'assets/templates/footer.html',
    directives: [RouterLink, NgIf]
})

export class Footer {
    constructor() {}
}