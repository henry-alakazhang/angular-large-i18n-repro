import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmallerComponent } from './smaller.component';

const routes: Routes = [
  {
    path: '',
    component: SmallerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmallerRoutingModule {}
