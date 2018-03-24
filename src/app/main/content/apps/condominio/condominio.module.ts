import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdkTableModule } from '@angular/cdk/table';

import { MatButtonModule, MatChipsModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatRippleModule, MatSelectModule, MatSortModule, MatTableModule, MatTabsModule } from '@angular/material';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AgmCoreModule } from '@agm/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { FuseCondominioDashboardComponent } from './dashboard/dashboard.component';
import { CondominioDashboardService } from './dashboard/dashboard.service';
import { FuseCondominioProductsComponent } from './condominios/condominios.component';
import { CondominioProductsService } from './condominios/condominios.service';
import { FuseCondominioProductComponent } from './condominio/condominio.component';
import { CondominioProductService } from './condominio/condominio.service';

const routes: Routes = [
    {
        path     : 'dashboard',
        component: FuseCondominioDashboardComponent,
        resolve  : {
            data: CondominioDashboardService
        }
    },
    {
        path     : 'products',
        component: FuseCondominioProductsComponent,
        resolve  : {
            data: CondominioProductsService
        }
    },
    {
        path     : 'products/:id',
        component: FuseCondominioProductComponent,
        resolve  : {
            data: CondominioProductService
        }
    },
    {
        path     : 'products/:id/:handle',
        component: FuseCondominioProductComponent,
        resolve  : {
            data: CondominioProductService
        }
    }
];

@NgModule({
    declarations: [
        FuseCondominioDashboardComponent,
        FuseCondominioProductsComponent,
        FuseCondominioProductComponent,
    ],
    imports     : [
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
    providers   : [
        CondominioDashboardService,
        CondominioProductsService,
        CondominioProductService,
    ]
})
export class FuseCondominioModule
{
}
