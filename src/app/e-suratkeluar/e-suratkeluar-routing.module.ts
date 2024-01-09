import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ESuratkeluarPage } from './e-suratkeluar.page';

const routes: Routes = [
  {
    path: '',
    component: ESuratkeluarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ESuratkeluarPageRoutingModule {}
