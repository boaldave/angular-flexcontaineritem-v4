import { Directive, ElementRef, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "[appFlexItemWidthPercentage]"
})
export class FlexItemWidthPercentageDirective {
  private _appFlexItemWidthPercentage: number;  // is no defaul
  /**
   * Defines FlexItem width as a percentage, so total width of FlexItems
   * may be less than 100%.
   * @param value
   * - percentage of FlexContainer's width
   */
  @Input() 
  set appFlexItemWidthPercentage(value) {
    if (value <= 0 || value > 5) {
      throw new Error('FlexItemWidthPercentage value must be between 1 and 5');
    }
    this._appFlexItemWidthPercentage = value;
    console.log('log:this._appFlexItemWidthPercentage =', value);
  };
  get appFlexItemWidthPercentage() {
    return this._appFlexItemWidthPercentage;
  };

  constructor(el: ElementRef) {
    console.log('log:Directive Created')
    el.nativeElement.style.flexBasis = this.appFlexItemWidthPercentage;
  }

  @HostBinding('style.flexBasis')
  get cssClasses() {
      return this.appFlexItemWidthPercentage;
  }

}
