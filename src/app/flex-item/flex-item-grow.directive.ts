import { Directive, ElementRef, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "[appFlexItemGrow]"
})
/**
 * Defines how FlexItems should grow to fill the FlexContainer width.
 * - if only a single FlexItem has a appFlexItemGrow value, 
 *   then that FlexItem will grow to the available space left in the FlexContainer.
 * - if more than one FlexItem have a appFlexItemGrow values, 
 *   then the growing FlexItems will grow to the available space left 
 *   in the FlexContainer, in the ration of itd relative appFlexItemGrow values.
 * See also FlexItemRelative.
 */
export class FlexItemGrowDirective {
  private _appFlexItemGrow = 1;
  @Input() 
  set appFlexItemGrow(value) {
    this._appFlexItemGrow = value;
    console.log('log:this._appFlexItemGrow =', value);
  };
  get appFlexItemGrow() {
    return this._appFlexItemGrow;
  };

  constructor(el: ElementRef) {
    console.log('log:Directive Created')
    el.nativeElement.style.flexGrow = this.appFlexItemGrow;
  }

  @HostBinding('style.flexGrow')
  get cssClasses() {
      return this.appFlexItemGrow;
  }

}
