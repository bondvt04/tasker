import {Component, View, Template, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
    selector: 'my-app'
})

@View({
    template: '<h1>Hello {{ name }}</h1>'
})

// Component controller
class MyAppComponent {
    constructor() {
        this.name = 'Alice';
    }
}

bootstrap(MyAppComponent);
