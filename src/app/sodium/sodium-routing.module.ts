import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SodiumPage } from './sodium.page';

const routes: Routes = [
  {
    path: '',
    component: SodiumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SodiumPageRoutingModule {}
