import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndiumPage } from './indium.page';

const routes: Routes = [
  {
    path: '',
    component: IndiumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndiumPageRoutingModule {}
