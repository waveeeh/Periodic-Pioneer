import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GermaniumPage } from './germanium.page';

const routes: Routes = [
  {
    path: '',
    component: GermaniumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GermaniumPageRoutingModule {}
