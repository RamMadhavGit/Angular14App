import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentInteractionRoutingModule } from './component-interaction-routing.module';
import { SharingDataModalParentComponent } from './sharing-data-modal-parent/sharing-data-modal-parent.component';
import { SharingDataModalChildOneComponent } from './sharing-data-modal-child-one/sharing-data-modal-child-one.component';
import { SharingDataModalChildTwoComponent } from './sharing-data-modal-child-two/sharing-data-modal-child-two.component';


@NgModule({
  declarations: [
    SharingDataModalParentComponent,
    SharingDataModalChildOneComponent,
    SharingDataModalChildTwoComponent
  ],
  imports: [
    CommonModule,
    ComponentInteractionRoutingModule
  ]
})
export class ComponentInteractionModule { }
