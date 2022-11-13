import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThraithaSiddhanthamuPage } from './thraitha-siddhanthamu.page';

const routes: Routes = [
  {
    path: '',
    component: ThraithaSiddhanthamuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThraithaSiddhanthamuPageRoutingModule {}
