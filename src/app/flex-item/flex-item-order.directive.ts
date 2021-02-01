import { Directive, ElementRef, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "[appFlexItemOrder]"
})
export class FlexItemOrderDirective {
  private _appFlexItemOrder = 1;
  /**
   * Defines order FlexItems should appear.
   * @param value
   * First FlexItem Order = 1
   * Second FlexItem Order = 2
   */
  @Input() 
  set appFlexItemOrder(value) {
    this._appFlexItemOrder = value;
    console.log('log:this._appFlexItemOrder =', value);
  };
  get appFlexItemOrder() {
    return this._appFlexItemOrder;
  };

  constructor(el: ElementRef) {
    console.log('log:Directive Created')
    el.nativeElement.style.flex = this.appFlexItemOrder;
  }

  @HostBinding('style.flex')
  get cssClasses() {
      return this.appFlexItemOrder;
  }

}
