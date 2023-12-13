import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalciumPage } from './calcium.page';

const routes: Routes = [
  {
    path: '',
    component: CalciumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalciumPageRoutingModule {}
