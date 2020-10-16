import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <div class="btn btn-outline-primary">Sing Up</div>
    <div class="btn btn-outline-info">Sing In</div>
    <p>This card is only for example purpose only. --> In Button</p>
    <!-- This component is created by using the command ng g c jumbo/button -it -is --flat --project component -->
  `,
  styles: [
  ]
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
