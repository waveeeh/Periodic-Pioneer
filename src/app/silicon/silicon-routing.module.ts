import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiliconPage } from './silicon.page';

const routes: Routes = [
  {
    path: '',
    component: SiliconPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiliconPageRoutingModule {}
