import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { ContainerComponent } from './container/container.component'
import { EventsDirective } from './events/events.directive'
import { RectDirective } from './rect/rect.directive'
import { ContainerService } from './container-service/container.service'
import { TextDirective } from './text/text.directive'
import { ElementBaseDirective } from './element-base/element-base.directive'
import { LineDirective } from './line/line.directive'

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    EventsDirective,
    RectDirective,
    TextDirective,
    ElementBaseDirective,
    LineDirective
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    ContainerComponent,
    RectDirective,
    TextDirective,
    ElementBaseDirective,
    LineDirective
  ],
  providers: [ContainerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
