import { Directive, Input, AfterViewChecked, OnDestroy, OnChanges, SimpleChanges } from '@angular/core'
import { ElementBaseDirective } from '../element-base/element-base.directive'
import { ContainerService } from '../container-service/container.service'
import { Text, Container } from '@svgdotjs/svg.js'

@Directive({
  selector: 'svg-text'
})
export class TextDirective extends ElementBaseDirective implements AfterViewChecked, OnChanges, OnDestroy {

  private _text: Text
  private _container: Container

  @Input() x: number | string = 0
  @Input() y: number | string = 0
  @Input() color: string = '#000'
  @Input() text: string = ''
  @Input() fontSize: number | string = 10

  constructor(
    private _containerService: ContainerService
  ) {
    super()
  }

  ngAfterViewChecked() {
    this._container = this._containerService.container

    if (this._containerService.container && !this._text) {
      this._text = this.create()
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this._text) return

    if (changes.fontSize && changes.fontSize.previousValue !== changes.fontSize.currentValue) {
      this._text.font({
        size: changes.fontSize.currentValue
      })
    }

    if (changes.text && changes.text.previousValue !== changes.text.currentValue) {
      this._text.text(changes.text.currentValue)
    }

    if (changes.x && changes.x.previousValue !== changes.x.currentValue) {
      this._text.attr('x', changes.x.currentValue)
    }

    if (changes.y && changes.y.previousValue !== changes.y.currentValue) {
      this._text.attr('y', changes.y.currentValue)
    }

    if (changes.color && changes.color.previousValue !== changes.color.currentValue) {
      this._text.fill(changes.color.currentValue)
    }

    if (changes.classes && changes.classes.previousValue !== changes.classes.currentValue) {
      this._text.attr('class', changes.classes.currentValue)
    }

    if (changes.attrs && changes.attrs.previousValue !== changes.attrs.currentValue) {
      this._text.attr(changes.attrs.currentValue)
    }

    if (changes.style && changes.style.previousValue !== changes.style.currentValue) {
      this._text.css(changes.style.currentValue)
    }
  }

  ngOnDestroy() {
    this._text.remove()
  }

  create() {
    const result = this._container
      .text(this.text)
      .fill(this.color)
      .font({
        size: this.fontSize
      })
      .attr(this.attrs)
      .attr('x', this.x)
      .attr('y', this.y)
      .attr('class', this.classes)
      .css(this.style)

    return this.registerHandlers(result)
  }
}
