import { NgModule } from '@angular/core';
import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';

@NgModule({
  declarations: [LazyComponent],
  imports: [LazyRoutingModule],
  providers: [],
})
export class LazyModule {}
