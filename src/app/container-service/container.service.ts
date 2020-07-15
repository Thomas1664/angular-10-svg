import { Injectable } from '@angular/core'
import { Container } from '@svgdotjs/svg.js'

@Injectable({
  providedIn: 'root'
})
export class ContainerService {
  container: Container

  constructor() { }
}
