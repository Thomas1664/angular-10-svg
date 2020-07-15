import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { ContainerComponent } from './container/container.component'
import { EventsDirective } from './events/events.directive'
import { RectDirective } from './rect/rect.directive'
import { ContainerService } from './container-service/container.service'

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    EventsDirective,
    RectDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [ContainerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
