import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TPendudukPageRoutingModule } from './t-penduduk-routing.module';

import { TPendudukPage } from './t-penduduk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TPendudukPageRoutingModule
  ],
  declarations: [TPendudukPage]
})
export class TPendudukPageModule {}
