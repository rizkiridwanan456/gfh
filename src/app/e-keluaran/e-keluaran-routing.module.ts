import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EKeluaranPage } from './e-keluaran.page';

const routes: Routes = [
  {
    path: '',
    component: EKeluaranPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EKeluaranPageRoutingModule {}
