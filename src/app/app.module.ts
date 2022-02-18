import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {MaterialExampleModule} from 'app/material-modle/material.module';
import 'hammerjs';
import { AppComponent } from 'app/app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { fuseConfig } from './fuse-config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeDbService } from './fake-db/fake-db.service';
import { EcommerceUsersService } from './viewusers/products/products.service';
import { FooterComponent } from './footer/footer.component';

export function HttpLoaderFactory(http: HttpClient){
    return new TranslateHttpLoader(http);
}
const appRoutes: Routes = [
    {
        path        : 'login',
        loadChildren: () =>
        import('./login-2/login-2.module').then((m) => m.Login2Module)    },
    {
        path        : 'add',
        loadChildren: () =>
                import('./panlecontrole/panle/panle.module').then((b) => b.PanleModule)
    },
    {
        path        : 'view',
        loadChildren: () =>
        import('./viewusers/e-commerce.module').then((e) => e.EcommerceModule)
    },
    {
        path      : '*',
        redirectTo: 'login'
    }
];


@NgModule({
    declarations: [
        ToolbarComponent,
        AppComponent,
       FooterComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        MaterialExampleModule,
       
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay             : 0,
            passThruUnknownUrl: true
        }),
        TranslateModule.forRoot(
            {
            loader:{
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }
        ),
       
        // FuseProgressBarModule,
        FuseModule.forRoot(fuseConfig),

        FuseSharedModule,
        // FuseSidebarModule,
        // FuseThemeOptionsModule,
       
    ],
    providers:[
        EcommerceUsersService,
    ],

    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
