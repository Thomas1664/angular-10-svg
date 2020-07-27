import { Component, Input, ChangeDetectorRef, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core'
import { Container, SVG } from '@svgdotjs/svg.js'
import { EventsDirective } from '../events/events.directive'
import { ContainerService } from '../container-service/container.service'

@Component({
  selector: 'svg-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent extends EventsDirective implements AfterViewInit, OnChanges {

  @Input('container-id') containerId: string
  @Input() width: number | string = '100%'
  @Input() height: number | string = 200
  @Input() viewbox: [number, number, number, number] = null

  private _container: Container

  public get container(): Container {
    return this._container
  }


  constructor(
    private _containerService: ContainerService
  ) {
    super()
  }

  ngAfterViewInit(): void {
    this._container = this.setContainer(this.containerId, this.width, this.height, this.viewbox)
    this._containerService.container = this._container
  }

  ngOnChanges(changes: SimpleChanges) {
    // Check if container is defined
    if (!this._container) return

    // Viewbox changed?
    if (changes.viewbox && changes.viewbox.previousValue !== changes.viewbox.currentValue) {
      this._container = this.setViewbox(this._container, changes.viewbox.currentValue)
    }

    // width changed?
    if (changes.width && changes.width.previousValue !== changes.width.currentValue) {
      this._container.width(changes.width.currentValue)
    }

    // height changed?
    if (changes.height && changes.height.previousValue !== changes.height.currentValue) {
      this._container.height(changes.height.currentValue)
    }

    this._containerService.container = this._container
  }

  setContainer(id: string, width: number | string, height: number | string, viewbox: [number, number, number, number]) {
    let result = SVG()
      .addTo(`#${id}`)
      .size(width, height)

    result = this.registerHandlers(result)

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