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

  protected registerHandlers(container: any) {
    return container
      .on('click', (event: MouseEvent) => this.click.emit(event))
      .on('dblclick', (event: MouseEvent) => this.dblClick.emit(event))
      .on('mousedown', (event: MouseEvent) => this.mouseDown.emit(event))
      .on('mouseup', (event: MouseEvent) => this.mouseUp.emit(event))
      .on('mouseover', (event: MouseEvent) => this.mouseOver.emit(event))
      .on('mouseout', (event: MouseEvent) => this.mouseOut.emit(event))
      .on('mousemove', (event: MouseEvent) => this.mouseMove.emit(event))
  }
}
