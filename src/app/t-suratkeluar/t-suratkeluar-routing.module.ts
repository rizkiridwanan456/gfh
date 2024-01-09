import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TSuratkeluarPage } from './t-suratkeluar.page';

const routes: Routes = [
  {
    path: '',
    component: TSuratkeluarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TSuratkeluarPageRoutingModule {}
