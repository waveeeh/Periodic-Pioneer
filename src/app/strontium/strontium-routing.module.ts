import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StrontiumPage } from './strontium.page';

const routes: Routes = [
  {
    path: '',
    component: StrontiumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StrontiumPageRoutingModule {}
