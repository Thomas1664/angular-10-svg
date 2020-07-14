import { Component, Input, ChangeDetectorRef, AfterViewInit, OnChanges, SimpleChanges, Output } from '@angular/core'
import { Container, SVG } from '@svgdotjs/svg.js'

@Component({
  selector: 'svg-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements AfterViewInit, OnChanges {

  @Input() containerId: string
  @Input() width: number | string = '100%'
  @Input() height: number | string = 200
  @Input() viewbox: [number, number, number, number] = null

  private _container: Container

  constructor(
    private changeDetector: ChangeDetectorRef
  ) { }

  ngAfterViewInit(): void {
    this._container = this.setContainer(this.containerId, this.width, this.height, this.viewbox)
  }

  ngOnChanges(changes: SimpleChanges) {
    // Check if container is defined
    if (!this._container) return

    // Viewbox changed?
    if (changes.viewbox.previousValue !== changes.viewbox.currentValue) {
      this._container = this.setViewbox(this._container, changes.viewbox.currentValue)
    }

    // width changed?
    if (changes.width.previousValue !== changes.width.currentValue) {
      this._container.width(changes.width.currentValue)
    }

    // height changed?
    if (changes.height.previousValue !== changes.height.currentValue) {
      this._container.height(changes.height.currentValue)
    }
  }

  setContainer(id: string, width: number | string, height: number | string, viewbox: [number, number, number, number]) {
    const result = SVG()
      .addTo(`#${id}`)
      .size(width, height)

    if (viewbox && viewbox.length === 4) {
      return this.setViewbox(result, viewbox)
    }

    return result
  }

  setViewbox(container: Container, viewbox: [number, number, number, number]) {
    if (viewbox && viewbox.length === 4) {
      return container.viewbox(...viewbox)
    } else {
      return container.attr({
        viewbox: ''
      })
    }
  }
}