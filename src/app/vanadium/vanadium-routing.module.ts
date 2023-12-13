import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VanadiumPage } from './vanadium.page';

const routes: Routes = [
  {
    path: '',
    component: VanadiumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VanadiumPageRoutingModule {}
