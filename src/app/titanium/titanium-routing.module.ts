import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TitaniumPage } from './titanium.page';

const routes: Routes = [
  {
    path: '',
    component: TitaniumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TitaniumPageRoutingModule {}
