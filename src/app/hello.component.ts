import { Component, Input } from '@angular/core';
import { FlexContainerFlowDirection } from './flex-container/flex-container-flow-direction.directive';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']

})
export class HelloComponent  {
  @Input() name: string;

  flexContainerFlowDirection = FlexContainerFlowDirection;
}
