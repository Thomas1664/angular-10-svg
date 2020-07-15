import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { ContainerComponent } from './container/container.component'
import { EventsDirective } from './events/events.directive'
import { RectDirective } from './rect/rect.directive'

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
