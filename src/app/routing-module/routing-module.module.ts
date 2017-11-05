import { ModalDialogSampelComponent } from './../modal-dialog-sampel/modal-dialog-sampel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routers: Routes = [
  {path: 'dialogdemo', component: ModalDialogSampelComponent},
  {path: '', redirectTo: '/dialogdemo', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routers)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModuleModule { }
