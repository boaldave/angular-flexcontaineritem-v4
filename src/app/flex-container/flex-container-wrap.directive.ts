import { Directive, ElementRef, HostBinding, Input } from "@angular/core";

export enum FlexContainerWrap {
  Wrap = 'wrap',
  Nowrap = 'nowrap'
}

@Directive({
  selector: "[appFlexContainerWrap]"
})
export class FlexContainerWrapDirective {
  private _appFlexContainerWrap = FlexContainerWrap.Wrap; // default 
  /**
   * Defines Responsive flow behavior of Horizontal FlexItems.
   * @param value
   * - To allow FlexItem wrapping, 
   *   set value = FlexContainerWrap.wrap
   * - To prevent FlexItem wrapping, 
   *   set value = FlexContainerWrap.noWrap
   */
  @Input() 
  set appFlexContainerWrap(value) {
    this._appFlexContainerWrap = value;
    console.log('log:this._appFlexContainerWrap =', value);
  };
  get appFlexContainerWrap() {
    return this._appFlexContainerWrap;
  };

  constructor(el: ElementRef) {
    console.log('log:Directive Created')
    el.nativeElement.style.flexWrap = this.appFlexContainerWrap.toString();
  }

  @HostBinding('style.flexWrap')
  get cssClasses() {
      return this.appFlexContainerWrap.toString();
  }

}
