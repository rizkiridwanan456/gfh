import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TPendudukPage } from './t-penduduk.page';

const routes: Routes = [
  {
    path: '',
    component: TPendudukPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TPendudukPageRoutingModule {}
