import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NickelPage } from './nickel.page';

const routes: Routes = [
  {
    path: '',
    component: NickelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NickelPageRoutingModule {}
