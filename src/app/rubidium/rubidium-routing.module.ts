import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RubidiumPage } from './rubidium.page';

const routes: Routes = [
  {
    path: '',
    component: RubidiumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RubidiumPageRoutingModule {}
