import { Component,Directive, View, EventEmitter, CORE_DIRECTIVES } from 'angular2/angular2';
import { FORM_DIRECTIVES, ControlGroup, FormBuilder } from 'angular2/angular2';
import { Validators } from 'angular2/angular2';
import { TypeValidators } from '../../helper/TypeValidators';
import { RouterLink, Router } from 'angular2/router';
import { AuthService } from '../../services/AuthService';
import { PopupService } from '../../services/PopupService';

@Component({
    selector: 'signup',
    viewBindings: [FormBuilder]
})

@View({
    templateUrl: 'assets/templates/signup.html',
    directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class Signup {
    private router: Router;
    private auth: AuthService;
    private popup: PopupService;
    private signupForm: ControlGroup;

    constructor(router: Router, auth: AuthService,  popup: PopupService,  fb: FormBuilder) {
        this.router = router;
        this.auth = auth;
        this.popup = popup;

        this.signupForm = fb.group({
            username:  ['', Validators.required ],
            password: ['', Validators.required ]
        });
    }

    private signup(event) {
       event.preventDefault();
        var form = this.signupForm.value;
        this.popup.show('Please Wait');
        this.auth.signup(form.username, form.password).then( () => {
          //login after signup
          this.auth.login(form.username, form.password).then( () => {
              this.popup.hide();
              this.router.parent.navigate('/');
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

        this.signupForm.controls['username'].updateValue('');
        this.signupForm.controls['password'].updateValue('');
    }
}