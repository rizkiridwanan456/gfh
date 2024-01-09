import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EKeluaranPageRoutingModule } from './e-keluaran-routing.module';

import { EKeluaranPage } from './e-keluaran.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EKeluaranPageRoutingModule
  ],
  declarations: [EKeluaranPage]
})
export class EKeluaranPageModule {}
