import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { FlexContainerComponent } from "./flex-container/flex-container.component";
import { FlexItemComponent } from "./flex-item/flex-item.component";
import { FlexContainerFlowDirectionDirective } from './flex-container/flex-container-flow-direction.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HFlexContainerFlowDirectionDirectiveomponent,
    FlexItemComponent,
    FlexContainerFlowDirectionDirective
  ],
  bootstrap: [AppComponent]
})

