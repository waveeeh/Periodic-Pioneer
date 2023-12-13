import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleniumPage } from './selenium.page';

const routes: Routes = [
  {
    path: '',
    component: SeleniumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleniumPageRoutingModule {}
