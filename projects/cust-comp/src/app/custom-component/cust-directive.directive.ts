import { Directive, ElementRef, HostBinding, HostListener, Renderer2, OnInit, Output, Input } from '@angular/core';

@Directive({
  selector: '[appCustDirective]'
})
export class CustDirectiveDirective {

  @Input()
  @HostBinding('class')
  public cl : string

  @HostBinding('style.font-size')
  font : string

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
    this.cl = `alert alert-warning`
    this.font = 'larger'
  }

  @HostListener('mouseleave')
  Output(){
    this.cl = `alert alert-light`
    this.font = 'medium'
  }

}
