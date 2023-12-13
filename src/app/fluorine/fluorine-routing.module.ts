import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FluorinePage } from './fluorine.page';

const routes: Routes = [
  {
    path: '',
    component: FluorinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FluorinePageRoutingModule {}
