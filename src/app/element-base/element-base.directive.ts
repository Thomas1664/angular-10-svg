import { Directive, Input } from '@angular/core'
import { EventsDirective } from '../events/events.directive'

@Directive({
  selector: ' '
})
export class ElementBaseDirective extends EventsDirective {

  @Input() classes: string[] = []
  @Input() attrs: { [key: string]: any } = {}
  @Input() style: CSSStyleDeclaration

  constructor() {
    super()
  }
}
