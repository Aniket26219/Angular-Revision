import { Component, OnInit } from '@angular/core';
import { AlrtEvent } from './alrts';

@Component({
  selector: 'app-inter-comp-commu',
  templateUrl: './inter-comp-commu.component.html',
  styleUrls: ['./inter-comp-commu.component.css']
})
export class InterCompCommuComponent implements OnInit {

  alrtPicked : AlrtEvent

  constructor() { }

  ngOnInit(): void {
  }

  alrtPicker(pickedVal : AlrtEvent){
    console.log(`received ${pickedVal}`)
    this.alrtPicked = pickedVal
  }
}
