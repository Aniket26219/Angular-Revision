import { Directive, ElementRef, HostBinding, HostListener, Renderer2, OnInit, Output, Input } from '@angular/core';

@Directive({
  selector: '[appCustDirective]'
})
export class CustDirectiveDirective {

  @Input('appCustDirective')
  @HostBinding('class')
  cl : string

  @HostBinding('style.font-size.px')
  font : number

  constructor(
    private elemtref : ElementRef,
    private render : Renderer2
  ) { 
    // elemtref.nativeElement.style.border = '1px solid red' //not recommended
    // render.setStyle(elemtref.nativeElement, 'border', '1px solid red')
    this.cl = `alert alert-warning`
  }

  @HostListener('mouseenter')
  OnInit(){
    this.cl = `alert alert-success`
    this.font = 25
  }

  @HostListener('mouseleave')
  Output(){
    this.cl = `alert alert-warning`
    this.font = 16
  }

}
