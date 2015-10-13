import { Component,Directive, View, EventEmitter, CORE_DIRECTIVES } from 'angular2/angular2';
import { FORM_DIRECTIVES, ControlGroup, FormBuilder } from 'angular2/angular2';
import { Validators } from 'angular2/angular2';
import { RouterLink, Router } from 'angular2/router';
import { AuthService } from '../../services/AuthService';
import { PopupService } from '../../services/PopupService';

@Component({
    selector: 'login',
    viewBindings: [FormBuilder]
})

@View({
    templateUrl: 'assets/templates/login.html',
    directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class Login {
    private router: Router;
    private auth: AuthService;
    private popup: PopupService;
    private loginForm: ControlGroup;

    constructor(router: Router, auth: AuthService, popup: PopupService, fb: FormBuilder) {
        this.router = router;
        this.auth = auth;
        this.popup = popup;

        this.loginForm = fb.group({
            username: ['', Validators.required ],
            password: ['', Validators.required ]
        });
    }

    private login(event) {
        event.preventDefault();
        var form = this.loginForm.value;

        this.popup.show('logging in');
        this.auth.login(form.username, form.password).then( () => {
            this.popup.hide();
            this.router.parent.navigate('/');
        })
        .catch((error) => {
            this.popup.hide();
            alert(error.message);
        });

        this.loginForm.controls['username'].updateValue('');
        this.loginForm.controls['password'].updateValue('');
    }
}