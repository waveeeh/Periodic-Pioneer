import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BerylliumPage } from './beryllium.page';

const routes: Routes = [
  {
    path: '',
    component: BerylliumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BerylliumPageRoutingModule {}
