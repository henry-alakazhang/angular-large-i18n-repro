import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SmallerRoutingModule } from './smaller-routing.module';
import { SmallerComponent } from './smaller.component';

@NgModule({
  declarations: [SmallerComponent],
  imports: [CommonModule, SmallerRoutingModule],
  providers: [],
})
export class SmallerModule {}
