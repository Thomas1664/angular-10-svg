import { Directive, Input, AfterViewChecked, OnDestroy, OnChanges, SimpleChanges } from '@angular/core'
import { EventsDirective } from '../events/events.directive'
import { Rect, Container } from '@svgdotjs/svg.js'
import { ContainerService } from '../container-service/container.service'
import { ElementBaseDirective } from '../element-base/element-base.directive'

@Directive({
  selector: 'svg-rect'
})
export class RectDirective extends ElementBaseDirective implements AfterViewChecked, OnDestroy, OnChanges {

  private _rect: Rect
  private _container: Container

  @Input() height: number | string
  @Input() width: number | string
  @Input() x: number | string = 0
  @Input() y: number | string = 0
  @Input() color: string = '#000'

  constructor(
    private _containerService: ContainerService
  ) {
    super()
  }

  ngAfterViewChecked() {
    this._container = this._containerService.container
    if (this._container && !this._rect) {
      this._rect = this.create()
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this._rect) return

    if (changes.width && changes.width.previousValue !== changes.width.currentValue) {
      this._rect.width(changes.width.currentValue)
    }

    if (changes.height && changes.height.previousValue !== changes.height.currentValue) {
      this._rect.height(changes.height.currentValue)
    }

    if (changes.x && changes.x.previousValue !== changes.x.currentValue) {
      this._rect.x(changes.x.currentValue)
    }

    if (changes.y && changes.y.previousValue !== changes.y.currentValue) {
      this._rect.y(changes.y.currentValue)
    }

    if (changes.color && changes.color.previousValue !== changes.color.currentValue) {
      this._rect.fill(changes.color.currentValue)
    }

    if (changes.classes && changes.classes.previousValue !== changes.classes.currentValue) {
      this._rect.attr('class', changes.classes.currentValue)
    }

    if (changes.style && changes.style.previousValue !== changes.style.currentValue) {
      this._rect.css(changes.style.currentValue)
    }
  }

  ngOnDestroy() {
    this._rect.remove()
  }

  create() {
    const result = this._container
      .rect()
      .width(this.width)
      .height(this.height)
      .fill(this.color)
      .move(this.x, this.y)
      .attr(this.attrs)
      .attr('class', this.classes)
      .css(this.style)

    return this.registerHandlers(result)
  }
}
