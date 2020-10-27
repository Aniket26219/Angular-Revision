import { Component, DoCheck, OnChanges, OnDestroy, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input()
  inputvar : string

  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges')
    console.log(changes)
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }
  ngOnInit(): void {
    console.log('ngOnInit')
  }

}
