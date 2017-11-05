import {RoutingModuleModule} from './routing-module/routing-module.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ModalDialogSampelComponent} from './modal-dialog-sampel/modal-dialog-sampel.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalDialogSampelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
