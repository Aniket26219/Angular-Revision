import { Component } from '@angular/core';
import { BtnEvents } from './custom-component/events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cust-comp';

  mainev : BtnEvents

  onBtn( comingev : BtnEvents){
    this.mainev = comingev
    console.log("This is from the app component")
  }
}
