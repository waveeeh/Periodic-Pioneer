import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HydrogenPage } from './hydrogen.page';

const routes: Routes = [
  {
    path: '',
    component: HydrogenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HydrogenPageRoutingModule {}
