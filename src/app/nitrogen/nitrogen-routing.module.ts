import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NitrogenPage } from './nitrogen.page';

const routes: Routes = [
  {
    path: '',
    component: NitrogenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NitrogenPageRoutingModule {}
