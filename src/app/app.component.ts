import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  width: number = 200
  changeWidth() {
    this.width = 500
  }

  svgClick(e) {
    console.log(e)

  }
}
