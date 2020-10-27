import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatabindingBasicComponent } from './databinding-basic/databinding-basic.component';
import { FormsModule } from '@angular/forms';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingBasicComponent,
    LifecycleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
