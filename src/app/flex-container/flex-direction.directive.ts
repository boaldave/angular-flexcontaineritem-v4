import { Directive, ElementRef, HostBinding, Input } from "@angular/core";

export enum FlexDirection {
  Column = 'column',
  Row = 'row'
}

@Directive({
  selector: "[appFlexDirection]"
})
export class FlexDirectionDirective {
  private _appFlexDirection = 'column';
  @Input() 
  set appFlexDirection(value) {
    this._appFlexDirection = value;
    console.log('log:this._appFlexDirection =', value);
  };
  get appFlexDirection() {
    return this._appFlexDirection;
  };

  constructor(el: ElementRef) {
    console.log('log:Directive Created')
    el.nativeElement.style.display = "flex";
  }

  @HostBinding('style.FlexDirection')
  get cssClasses() {
      return this.appFlexDirection;
  }

}
