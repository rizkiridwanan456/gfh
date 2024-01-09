import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EUangkeluarPageRoutingModule } from './e-uangkeluar-routing.module';

import { EUangkeluarPage } from './e-uangkeluar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EUangkeluarPageRoutingModule
  ],
  declarations: [EUangkeluarPage]
})
export class EUangkeluarPageModule {}
