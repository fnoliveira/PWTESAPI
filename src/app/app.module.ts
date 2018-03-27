import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import 'hammerjs';

import { AuthModule } from './auth/auth.module';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';

import { fuseConfig } from './fuse-config';

import { AppComponent } from './app.component';
import { FuseFakeDbService } from './fuse-fake-db/fuse-fake-db.service';
import { FuseMainModule } from './main/main.module';
import { FuseErrorsModule } from './errors/errors.module';
const appRoutes: Routes = [
    {
        path: 'apps',
        loadChildren: './main/content/apps/apps.module#FuseAppsModule'
    },
    
    {
        path: '', 
        redirectTo: 'apps/dashboards/analytics', 
        pathMatch: 'full'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FuseFakeDbService, {
            delay: 0,
            passThruUnknownUrl: true
        }),

        FuseModule.forRoot(fuseConfig),
        FuseSharedModule,
        AuthModule,
        FuseErrorsModule,
        FuseMainModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
