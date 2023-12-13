import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RutheniumPage } from './ruthenium.page';

const routes: Routes = [
  {
    path: '',
    component: RutheniumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RutheniumPageRoutingModule {}
