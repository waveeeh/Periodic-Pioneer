import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoronPage } from './boron.page';

const routes: Routes = [
  {
    path: '',
    component: BoronPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoronPageRoutingModule {}
