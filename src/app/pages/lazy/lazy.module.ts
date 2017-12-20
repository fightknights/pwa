import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRouting } from './lazy.routing';

import { LazyComponent } from './lazy.component';

@NgModule({
  imports: [
    CommonModule,
    LazyRouting
  ],
  declarations: [
    LazyComponent
  ],
  providers: [],
})
export class PeopleModule {
}
