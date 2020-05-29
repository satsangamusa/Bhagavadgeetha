import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LordKrishnaPage } from './lord-krishna.page';

const routes: Routes = [
  {
    path: '',
    component: LordKrishnaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LordKrishnaPageRoutingModule {}
