import { Directive, ElementRef, HostBinding, Input } from "@angular/core";

export enum FlexContainerJustify {
  Left = 'flex-start',
  Center = 'center',
  Right = 'flex-end',
  SpaceBetween = 'space-between',
  SpaceAround = 'space-around'
}

@Directive({
  selector: "[appFlexContainerJustify]"
})
/**
 * Determines how FlexItems are justifed within a horizontally flowing FlexContainer
 * @remarks
 * - Video Resource: https://www.youtube.com/watch?v=JJSoEo8JSnc
 */
export class FlexContainerJustifyDirective {
  private _appFlexContainerJustify = FlexContainerJustify.Left; // default
  /**
   * Defines how Horizontally Aligned FlexItems are individually aligned within the FlexContainer,
   * but only works if the combined width of the FlexItems is less than width of the FlexContainer.
   * @param value
   * SpaceBetween: all FlexItems as a group, align justified (margins are evenly spaced between FlexItems).
   * SpaceAround: all FlexItems as a group, align justified (margins are even;y spaced between FlexItems 
   * Left: all FlexItems as a group, align Left (empty margin displays to right of FlexItem group)
   * Center: all FlexItems as a group, align Center (empty margin displays to left and right of FlexItem group)
   * Right: all FlexItems as a group, align Right  (empty margin displays to left of FlexItem group)
   * and to left and right of the group).
   */
  @Input() 
  set appFlexContainerJustify(value) {
    this._appFlexContainerJustify = value;
    console.log('log:this._appFlexContainerJustify =', value);
  };
  get appFlexContainerJustify() {
    return this._appFlexContainerJustify;
  };

  constructor(el: ElementRef) {
    console.log('log:Directive Created')
    el.nativeElement.style.justifyContent = this.appFlexContainerJustify;
  }

  @HostBinding('style.justifyContent')
  get cssClasses() {
      return this.appFlexContainerJustify;
  }

}
