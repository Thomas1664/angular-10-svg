import { Directive, Output, EventEmitter } from '@angular/core'

@Directive({
  selector: ' '
})
export class EventsDirective {
  @Output('svgClick') click: EventEmitter<MouseEvent> = new EventEmitter
  @Output('svgDblClick') dblClick: EventEmitter<MouseEvent> = new EventEmitter
  @Output('svgMouseDown') mouseDown: EventEmitter<MouseEvent> = new EventEmitter
  @Output('svgMouseUp') mouseUp: EventEmitter<MouseEvent> = new EventEmitter
  @Output('svgMouseOver') mouseOver: EventEmitter<MouseEvent> = new EventEmitter
  @Output('svgMouseOut') mouseOut: EventEmitter<MouseEvent> = new EventEmitter
  @Output('svgMouseMove') mouseMove: EventEmitter<MouseEvent> = new EventEmitter

  constructor() { }

}
