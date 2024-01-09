import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TUangkeluarPage } from './t-uangkeluar.page';

const routes: Routes = [
  {
    path: '',
    component: TUangkeluarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TUangkeluarPageRoutingModule {}
