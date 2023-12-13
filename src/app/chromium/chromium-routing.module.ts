import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChromiumPage } from './chromium.page';

const routes: Routes = [
  {
    path: '',
    component: ChromiumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChromiumPageRoutingModule {}
