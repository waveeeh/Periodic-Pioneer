import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PalladiumPage } from './palladium.page';

const routes: Routes = [
  {
    path: '',
    component: PalladiumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PalladiumPageRoutingModule {}
