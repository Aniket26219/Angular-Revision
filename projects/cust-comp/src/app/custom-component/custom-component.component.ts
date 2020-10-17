import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-component',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.css']
})
export class CustomComponentComponent implements OnInit {

  @Input()
  title : string

  @Input()
  clstyp : string

  constructor() { }

  ngOnInit(): void {
    this.clstyp = `alert alert-${this.clstyp}`
  }

}
