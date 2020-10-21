import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AlrtEvent } from './alrts';

@Component({
  selector: 'app-alrt-picker',
  templateUrl: './alrt-picker.component.html',
  styleUrls: ['./alrt-picker.component.css']
})
export class AlrtPickerComponent implements OnInit {

  @Output()
  picker : EventEmitter<AlrtEvent> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onClk(alrt : string){
    let alt : AlrtEvent = {
      alrts : alrt
    }
    this.picker.emit(alt)
  }

}
