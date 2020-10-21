import { Component, OnInit, Input } from '@angular/core';
import { AlrtEvent } from './alrts';

@Component({
  selector: 'app-alrt-main',
  templateUrl: './alrt-main.component.html',
  styleUrls: ['./alrt-main.component.css']
})
export class AlrtMainComponent implements OnInit {

  @Input()
  alrte: AlrtEvent

  constructor() { }

  ngOnInit(): void {
  }

}
