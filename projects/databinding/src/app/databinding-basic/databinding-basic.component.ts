import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding-basic',
  templateUrl: './databinding-basic.component.html',
  styleUrls: ['./databinding-basic.component.css']
})
export class DatabindingBasicComponent implements OnInit {

  myDB : string

  constructor() { }

  ngOnInit(): void {
  }

  clkMe( eve : any){
    console.log(new Date().toString())
    console.log(eve)
  }

}
