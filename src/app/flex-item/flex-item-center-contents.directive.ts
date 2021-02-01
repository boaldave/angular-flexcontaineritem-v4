import { Directive, ElementRef, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "[appFlexItemCenterContents]"
})
/**
 * Centers FlexItem Contents (top/bottom, left/right).
 */
export class FlexItemCenterContentsDirective {
  private _appFlexItemCenterContents = 1;

  constructor(el: ElementRef) {
    console.log('log:Directive Created')
    el.nativeElement.style.margin = 'auto';
  }

  @HostBinding('style.margin')
  get cssClasses() {
      return 'auto';
  }
}
