import { Directive, ElementRef, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "[appFlexItemRelativeSize]"
})
export class FlexItemRelativeSizeDirective {
  private _appFlexItemRelativeSize = 1; //default
  /**
   * Defines relative FlexItem sizes.
   * @param value
   * - To create a FlexItem that is double the size of a FlexItem of 
   *   size = 1, set value = 2 
   * - To create a FlexItem that is triple the size of a FlexItem of 
   *   size = 1, set value = 3 
   */
  @Input() 
  set appFlexItemRelativeSize(value) {
    if (value <= 0 || value > 5) {
      throw new Error('FlexItemRelativeSize value must be between 1 and 5');
    }
    this._appFlexItemRelativeSize = value;
    console.log('log:this._appFlexItemRelativeSize =', value);
  };
  get appFlexItemRelativeSize() {
    return this._appFlexItemRelativeSize;
  };

  constructor(el: ElementRef) {
    console.log('log:Directive Created')
    el.nativeElement.style.flex = this.appFlexItemRelativeSize;
  }

  @HostBinding('style.flex')
  get cssClasses() {
      return this.appFlexItemRelativeSize;
  }

}
