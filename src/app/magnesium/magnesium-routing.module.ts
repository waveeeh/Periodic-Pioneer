import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MagnesiumPage } from './magnesium.page';

const routes: Routes = [
  {
    path: '',
    component: MagnesiumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MagnesiumPageRoutingModule {}
