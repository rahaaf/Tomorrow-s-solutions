import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import {  MatIconModule } from '@angular/material/icon';
import {  MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

import 'hammerjs';
import { TranslateModule } from '@ngx-translate/core';



import { PanlecontroleComponent } from '../panlecontrole.component';

import { HttpClientModule } from '@angular/common/http';
import { FuseSharedModule } from '@fuse/shared.module';
import { ContactsService } from '../contacts/contacts.service';

const appRoutes: Routes = [
    {
        path      : '',
        component: PanlecontroleComponent,
        children:[
          {
              path:'contacts',
              loadChildren: () =>
              import('../contacts/contacts.module').then((m) => m.ContactsModule)
          }
        ]
      
       
    }
];

@NgModule({
  declarations: [PanlecontroleComponent,
],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    // TranslateModule.forRoot(),
    TranslateModule,
    // Material moment date module

    // Material
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    FuseSharedModule,
  

  ],
  providers:[ContactsService],

 
})
export class PanleModule { }
