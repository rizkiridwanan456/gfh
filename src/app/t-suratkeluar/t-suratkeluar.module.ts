import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TSuratkeluarPageRoutingModule } from './t-suratkeluar-routing.module';

import { TSuratkeluarPage } from './t-suratkeluar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TSuratkeluarPageRoutingModule
  ],
  declarations: [TSuratkeluarPage]
})
export class TSuratkeluarPageModule {}
