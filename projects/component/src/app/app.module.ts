import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JumboComponent } from './jumbo/jumbo.component';
import { CardComponent } from './jumbo/card.component';
import { ButtonComponent } from './jumbo/button.component';


@NgModule({
  declarations: [
    AppComponent,
    JumboComponent,
    CardComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
