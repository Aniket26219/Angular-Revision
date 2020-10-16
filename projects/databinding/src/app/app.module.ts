import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatabindingBasicComponent } from './databinding-basic/databinding-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingBasicComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
