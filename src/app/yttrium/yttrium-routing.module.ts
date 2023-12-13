import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YttriumPage } from './yttrium.page';

const routes: Routes = [
  {
    path: '',
    component: YttriumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YttriumPageRoutingModule {}
