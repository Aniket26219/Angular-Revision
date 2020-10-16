import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <div class="btn btn-outline-primary">Sing Up</div>
    <div class="btn btn-outline-info">Sing In</div>
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
