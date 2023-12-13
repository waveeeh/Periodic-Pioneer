import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NiobiumPage } from './niobium.page';

const routes: Routes = [
  {
    path: '',
    component: NiobiumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NiobiumPageRoutingModule {}
