import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { FlexContainerComponent } from "./flex-container/flex-container.component";
import { FlexItemComponent } from "./flex-item/flex-item.component";
import { FlexContainerFlowDirectionDirective } from "./flex-container/flex-container-flow-direction.directive";
import { FlexContainerJustifyDirective } from "./flex-container/flex-container-justify.directive";
import { FlexContainerVerticalAlignmentDirective } from "./flex-container/flex-container-vertical-alignment.directive";
import { FlexContainerWrapDirective } from "./flex-container/flex-container-wrap.directive";
import { FlexItemOrderDirective } from "./flex-item/flex-item-order.directive";
import { FlexItemRelativeSizeDirective } from "./flex-item/flex-item-relative-size.directive";
import { FlexItemWidthPercentageDirective } from "./flex-item/flex-item-width-percentage.directive";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    FlexContainerComponent,
    FlexContainerFlowDirectionDirective,
    FlexContainerJustifyDirective,
    FlexContainerWrapDirective,
    FlexItemComponent,
    FlexItemOrderDirective,
    FlexItemRelativeSizeDirective,
    FlexItemWidthPercentageDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
