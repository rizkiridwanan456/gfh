import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TUangkeluarPageRoutingModule } from './t-uangkeluar-routing.module';

import { TUangkeluarPage } from './t-uangkeluar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TUangkeluarPageRoutingModule
  ],
  declarations: [TUangkeluarPage]
})
export class TUangkeluarPageModule {}
