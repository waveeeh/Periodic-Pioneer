import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalliumPage } from './gallium.page';

const routes: Routes = [
  {
    path: '',
    component: GalliumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalliumPageRoutingModule {}
