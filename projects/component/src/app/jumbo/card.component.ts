import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// In this we can change that ViewEncapsulation.None to .Emulated/ .ShadowDom . Where Emulated is the default one and the ShadowDom apply the css to the child also in our case the child is the button component and the in the None it apply the css globally.