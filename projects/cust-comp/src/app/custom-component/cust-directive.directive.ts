import { Directive, ElementRef, HostBinding, HostListener, Renderer2, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appCustDirective]'
})
export class CustDirectiveDirective {

  @HostBinding('class')
  cl : string

  constructor(
    private elemtref : ElementRef,
    private render : Renderer2
  ) {
    // elemtref.nativeElement.style.border = `1px solid red` //not recommended way
    // render.setStyle(elemtref.nativeElement, 'border', '1px solid red')
    this.cl = `alert alert-light`
  }

  @HostListener('mouseenter')
  OnInit(){
    this.cl = `alert alert-dark`
  }

  @HostListener('mouseleave')
  Output(){
    this.cl = `alert alert-light`
  }

}
