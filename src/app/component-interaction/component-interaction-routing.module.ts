import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharingDataModalChildOneComponent } from './sharing-data-modal-child-one/sharing-data-modal-child-one.component';
import { SharingDataModalChildTwoComponent } from './sharing-data-modal-child-two/sharing-data-modal-child-two.component';
import { SharingDataModalParentComponent } from './sharing-data-modal-parent/sharing-data-modal-parent.component';

const routes: Routes = [
  // children: [
    { path: 'parent', component: SharingDataModalParentComponent },
    { path: 'childone', component: SharingDataModalChildOneComponent },
    { path: 'childtwo', component: SharingDataModalChildTwoComponent },
  // ]
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentInteractionRoutingModule { }
