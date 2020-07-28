import { Directive, AfterViewChecked, OnDestroy, Input } from '@angular/core'
import { ElementBaseDirective } from '../element-base/element-base.directive'
import { Line, Container } from '@svgdotjs/svg.js'
import { ContainerService } from '../container-service/container.service'

@Directive({
  selector: 'svg-line'
})
export class LineDirective extends ElementBaseDirective implements AfterViewChecked, OnDestroy {

  private _line: Line
  private _container: Container

  @Input() width: number
  @Input() color: string = '#000'
  @Input() x0: number = 0
  @Input() y0: number = 0
  @Input() x1: number = 1
  @Input() y1: number = 1

  constructor(
    private _containerService: ContainerService
  ) {
    super()
  }

  ngAfterViewChecked() {
    this._container = this._containerService.container

    if (this._containerService.container && !this._line) {
      this._line = this.create()
    }
  }

  ngOnDestroy() {
    this._line.remove()
  }

  create() {
    const line = this._container
      .line(this.x0, this.y0, this.x1, this.y1)
      .stroke({
        color: this.color,
        width: this.width
      })
      .attr('class', this.classes)
      .attr(this.attrs)
      .css(this.style)

    return this.registerHandlers(line)
  }
}
