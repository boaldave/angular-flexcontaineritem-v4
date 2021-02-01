import { Directive, ElementRef, HostBinding, Input } from "@angular/core";

export enum FlexContainerFlowDirection {
  Vertical = 'column',
  Horizontal = 'row'
}

@Directive({
  selector: "[appFlexContainerFlowDirection]"
})
/**
 * Defines the direction of FlexItem Flow (Horizontal or Vertical).
 */
export class FlexContainerFlowDirectionDirective {
  private _appFlexContainerFlowDirection = FlexContainerFlowDirection.Vertical; // default
  /**
   * - To create a FlexContainer whose FlexItems flow vertically, 
   *   set value = FlexContainerFlowDirection.Column
   * - To create a FlexContainer whose FlexItems flow horizontally, 
   *   set value = FlexContainerFlowDirection.Row
   */
  @Input() 
  set appFlexContainerFlowDirection(value) {
    this._appFlexContainerFlowDirection = value;
    console.log('log:this._appFlexContainerFlowDirection =', value);
  };
  get appFlexContainerFlowDirection() {
    return this._appFlexContainerFlowDirection;
  };

  constructor(el: ElementRef) {
    console.log('log:Directive Created')
    el.nativeElement.style.flexDirection = this.appFlexContainerFlowDirection.toString();
  }

  @HostBinding('style.flexDirection')
  get cssClasses() {
      return this.appFlexContainerFlowDirection.toString();
  }

}
