import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input('appUnless')
  condition : boolean

  constructor(
    private temRef : TemplateRef<any>,
    private viewContrRef : ViewContainerRef
  ) { 
    console.log(this.temRef)
    console.log(this.viewContrRef)

    if(!this.condition){
      this.viewContrRef.createEmbeddedView(this.temRef)
    }else{
      this.viewContrRef.clear()
    }
  }
// in that if else block if the condition is not then it will create that embedded view otherwise it will not create the view.
}
