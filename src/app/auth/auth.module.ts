import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { AuthConfig, AuthHttp } from 'angular2-jwt';

import { UserService } from './../service/user.service';
import { AuthGuard } from './_guards/auth.guard';
import { AdminAuthGuard } from './_guards/admin-auth-guard.service';
import { AuthenticationService } from './../service/authentication.service';
import { TOKEN_NAME } from './auth.constant';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { ForgotPasswordModule } from './forgot-password/forgot-password.module';
import { ResetPasswordModule } from './reset-password/reset-password.module';
import { MailConfirmModule } from './mail-confirm/mail-confirm.module';
import { ProfileModule } from './profile/profile.module';

export function authHttpServiceFactory(http: Http) {
    return new AuthHttp(new AuthConfig({
        tokenName: TOKEN_NAME,
        globalHeaders: [{ 'Content-Type': 'application/json' }],
        noJwtError: false,
        noTokenScheme: true,
        tokenGetter: (() => localStorage.getItem(TOKEN_NAME))
    }), http);
}

@NgModule({
    declarations: [],
    imports: [
        LoginModule,
        RegisterModule,
        ForgotPasswordModule,
        ResetPasswordModule,
        MailConfirmModule,
        ProfileModule,
        CommonModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        { provide: AuthHttp, useFactory: authHttpServiceFactory, deps: [Http] },
        AuthenticationService,
        UserService,
        AuthGuard,
        AdminAuthGuard,
    ]
})

export class AuthModule {
}