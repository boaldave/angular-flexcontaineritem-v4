import { Directive, ElementRef, HostBinding, Input } from "@angular/core";

export enum FlexContainerVerticalAlignment {
  Top = 'flex-start',
  Center = 'center',
  Stretch = 'stretch',
  Botton = 'flex-end'
}

@Directive({
  selector: "[appFlexContainerVerticalAlignment]"
})
/**
 * Defines how a Horizontally flowing FlexContainer vertically align its FlexItems.
 */
export class FlexContainerVerticalAlignmentDirective {
  private _appFlexContainerVerticalAlignment = 1;
  /**
   * Top: all FlexItems align at top (heights of FlextItems can vary) 
   * Center: all FlexItems align at center (heights of FlextItems can vary) 
   * Stretch: all FlexItems align at center (heights of FlextItems are stretched to same value) 
   * Bottom: all FlexItems align at bottom (heights of FlextItems can vary) 
   */
  @Input() 
  set appFlexContainerVerticalAlignment(value) {
    this._appFlexContainerVerticalAlignment = value;
    console.log('log:this._appFlexContainerVerticalAlignment =', value);
  };
  get appFlexContainerVerticalAlignment() {
    return this._appFlexContainerVerticalAlignment;
  };

  constructor(el: ElementRef) {
    console.log('log:Directive Created')
    el.nativeElement.style.alignItems = this.appFlexContainerVerticalAlignment;
  }

  @HostBinding('style.alignItems')
  get cssClasses() {
      return this.appFlexContainerVerticalAlignment;
  }

}
