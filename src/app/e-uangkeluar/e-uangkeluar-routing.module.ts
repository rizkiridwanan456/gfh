import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EUangkeluarPage } from './e-uangkeluar.page';

const routes: Routes = [
  {
    path: '',
    component: EUangkeluarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EUangkeluarPageRoutingModule {}
