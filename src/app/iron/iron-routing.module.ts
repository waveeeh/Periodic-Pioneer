import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IronPage } from './iron.page';

const routes: Routes = [
  {
    path: '',
    component: IronPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IronPageRoutingModule {}
