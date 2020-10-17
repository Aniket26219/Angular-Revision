import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { types } from 'util';
import { BtnEvents } from './events';

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

  @Output()
  btnOutput : EventEmitter<BtnEvents> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    this.clstyp = `alert alert-${this.clstyp}`
  }

  onClk(){
    let eve : BtnEvents = {
      titles : this.title,
      type : this.clstyp
    }
    this.btnOutput.emit(eve)
  }
}
