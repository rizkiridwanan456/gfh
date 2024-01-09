import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ESuratkeluarPageRoutingModule } from './e-suratkeluar-routing.module';

import { ESuratkeluarPage } from './e-suratkeluar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ESuratkeluarPageRoutingModule
  ],
  declarations: [ESuratkeluarPage]
})
export class ESuratkeluarPageModule {}
