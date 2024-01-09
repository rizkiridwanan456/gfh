import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KeluaranPageRoutingModule } from './keluaran-routing.module';

import { KeluaranPage } from './keluaran.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KeluaranPageRoutingModule
  ],
  declarations: [KeluaranPage]
})
export class KeluaranPageModule {}
