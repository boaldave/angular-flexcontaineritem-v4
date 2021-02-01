import { Directive, ElementRef, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "[appFlexItemRelativeSize]"
})
/**
 * Defines relative FlexItem sizes.
 * If FlexDirectionFlow = Horizontal, then all FlexItems will fill width.
 *   and width of each = appFlexItemRelativeSize / sumOfFlexItemRelativeSizes
 * If FlexDirectionFlow = Vertical, then all FlexItems will fill height.
 *   and height of each = appFlexItemRelativeSize / sumOfFlexItemRelativeSizes
 * See also FlexItemGrow.
 */
export class FlexItemRelativeSizeDirective {
  private _appFlexItemRelativeSize = 1; //default
  /**
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
