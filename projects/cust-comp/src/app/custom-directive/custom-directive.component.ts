import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.css']
})
export class CustomDirectiveComponent implements OnInit {

  mobiles = ['Redmi', 'Samsung', 'Realme', 'OnePlus', 'Iphone']

  constructor() { }

  ngOnInit(): void {
  }

}
