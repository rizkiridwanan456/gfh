import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TKeluaranPage } from './t-keluaran.page';

const routes: Routes = [
  {
    path: '',
    component: TKeluaranPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TKeluaranPageRoutingModule {}
