import { Directive, ElementRef, HostBinding, Input } from "@angular/core";

export enum FlexContainerDirection {
  Column = 'column',
  Row = 'row'
}

@Directive({
  selector: "[appFlexContainerDirection]"
})
export class FlexContainerDirectionDirective {
  private _appFlexContainerDirection = 'column';
  @Input() 
  set appFlexContainerDirection(value) {
    this._appFlexContainerDirection = value;
    console.log('log:this._appFlexContainerDirection =', value);
  };
  get appFlexContainerDirection() {
    return this._appFlexContainerDirection;
  };

  constructor(el: ElementRef) {
    console.log('log:Directive Created')
    el.nativeElement.style.display = "flex";
  }

  @HostBinding('style.FlexDirection')
  get cssClasses() {
      return this.appFlexContainerDirection;
  }

}
