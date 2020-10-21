import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomComponentComponent } from './custom-component/custom-component.component';
import { CustDirectiveDirective } from './custom-directive/cust-directive.directive';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomComponentComponent,
    CustDirectiveDirective,
    CustomDirectiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
