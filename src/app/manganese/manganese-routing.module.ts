import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManganesePage } from './manganese.page';

const routes: Routes = [
  {
    path: '',
    component: ManganesePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManganesePageRoutingModule {}
