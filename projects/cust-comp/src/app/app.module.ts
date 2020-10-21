import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomComponentComponent } from './custom-component/custom-component.component';
import { CustDirectiveDirective } from './custom-directive/cust-directive.directive';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { UnlessDirective } from './custom-directive/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomComponentComponent,
    CustDirectiveDirective,
    CustomDirectiveComponent,
    UnlessDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
