import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../../service/authentication.service';
import { UserService } from './../../service/user.service';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';

@Component({
    selector: 'fuse-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: fuseAnimations
})
export class FuseLoginComponent implements OnInit {
    loginForm: FormGroup;
    loginFormErrors: any;
    loading = false;
    error = '';
    redirectUrl: string;

    constructor(
        private fuseConfig: FuseConfigService,
        private formBuilder: FormBuilder,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });

        this.loginFormErrors = {
            email: {},
            password: {}
        };

        this.redirectUrl = this.activatedRoute.snapshot.queryParams['redirectTo'];
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });

        this.loginForm.valueChanges.subscribe(() => {
            this.onLoginFormValuesChanged();
        });

        this.userService.logout();
    }

    onLoginFormValuesChanged() {
        for (const field in this.loginFormErrors) {
            if (!this.loginFormErrors.hasOwnProperty(field)) {
                continue;
            }

            // Clear previous errors
            this.loginFormErrors[field] = {};

            // Get the control
            const control = this.loginForm.get(field);

            if (control && control.dirty && !control.valid) {
                this.loginFormErrors[field] = control.errors;
            }
        }
    }

    login() {
        this.loading = true;

        this.authenticationService.login('master', '123456')
            .subscribe(
                result => {
                    this.loading = false;

                    if (result) {
                        this.userService.login(result);
                        this.navigateAfterSuccess();
                    } else {
                        this.error = 'Username or password is incorrect';
                    }
                },
                error => {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            );
    }

    private navigateAfterSuccess() {
        if (this.redirectUrl) {
            this.router.navigateByUrl(this.redirectUrl);
        } else {
            this.router.navigate(['/']);
        }
    }
}
