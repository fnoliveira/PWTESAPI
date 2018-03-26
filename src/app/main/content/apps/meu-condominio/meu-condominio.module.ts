import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdkTableModule } from '@angular/cdk/table';

import { MatButtonModule, MatChipsModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatRippleModule, MatSelectModule, MatSortModule, MatTableModule, MatTabsModule } from '@angular/material';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AgmCoreModule } from '@agm/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { FuseCondominioDashboardComponent } from './dashboard/dashboard.component';
import { MeuCondominioDashboardService } from './../../../../service/meu-condominio.dashboard.service';
import { FuseCondominiosComponent } from './condominios/condominios.component';
import { MeuCondominioCondominiosService } from './../../../../service/meu-condominio.condominios.service';
import { FuseCondominioComponent } from './condominio/condominio.component';
import { MeuCondominioCondominioService } from './../../../../service/meu-condominio.condominio.service'

const routes: Routes = [
    {
        path: 'dashboard',
        component: FuseCondominioDashboardComponent,
        resolve: {
            data: MeuCondominioDashboardService
        }
    },
    {
        path: 'condominios',
        component: FuseCondominiosComponent,
        resolve: {
            data: MeuCondominioCondominiosService
        }
    },
    {
        path: 'condominios/:id',
        component: FuseCondominioComponent,
        resolve: {
            data: MeuCondominioCondominioService
        }
    },
    {
        path: 'condominios/:id/:handle',
        component: FuseCondominioComponent,
        resolve: {
            data: MeuCondominioCondominioService
        }
    }
];

@NgModule({
    declarations: [
        FuseCondominioDashboardComponent,
        FuseCondominiosComponent,
        FuseCondominioComponent,
    ],
    imports: [
        RouterModule.forChild(routes),

        CdkTableModule,
        MatButtonModule,
        MatChipsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatRippleModule,
        MatSelectModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,

        NgxChartsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
        }),

        FuseSharedModule,
        FuseWidgetModule,
    ],
    providers: [
        MeuCondominioDashboardService,
        MeuCondominioCondominiosService,
        MeuCondominioCondominioService,
    ]
})
export class FuseMeuCondominioModule {
}
