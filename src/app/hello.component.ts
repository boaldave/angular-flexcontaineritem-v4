import { Component, Input } from '@angular/core';
import { FlexContainerDirection } from './flex-container/flex-container-direction.directive';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']

})
export class HelloComponent  {
  @Input() name: string;

  flexContainerDirection = FlexContainerDirection;
}
