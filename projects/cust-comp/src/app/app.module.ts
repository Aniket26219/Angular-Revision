import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomComponentComponent } from './custom-component/custom-component.component';
import { CustDirectiveDirective } from './custom-component/cust-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomComponentComponent,
    CustDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
