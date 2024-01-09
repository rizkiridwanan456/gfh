import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TKeluaranPageRoutingModule } from './t-keluaran-routing.module';

import { TKeluaranPage } from './t-keluaran.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TKeluaranPageRoutingModule
  ],
  declarations: [TKeluaranPage]
})
export class TKeluaranPageModule {}
