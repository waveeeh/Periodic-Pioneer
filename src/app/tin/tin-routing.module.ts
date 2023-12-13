import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TinPage } from './tin.page';

const routes: Routes = [
  {
    path: '',
    component: TinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TinPageRoutingModule {}
