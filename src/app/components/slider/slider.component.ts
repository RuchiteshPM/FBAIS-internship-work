import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
    items: Array<any> = []
  constructor() {
      this.items = [
          { name: '../../../assets/img/FBAIS/thumb1.png' },
          { name: '../../../assets/img/FBAIS/thumb2.png' },
          { name: '../../../assets/img/FBAIS/thumb3.png' },
          { name: '../../../assets/img/FBAIS/thumb4.png' },
          { name: '../../../assets/img/FBAIS/thumb5.png' },
          { name: '../../../assets/img/FBAIS/thumb6.png' },
          { name: '../../../assets/img/FBAIS/thumb7.png' },
          { name: '../../../assets/img/FBAIS/thumb8.png' },
          { name: '../../../assets/img/FBAIS/thumb9.png' },
          // { name: 'assets/images/thumb9.png' },
          // { name: 'assets/images/thumb4.png' },
          // { name: 'assets/images/thumb5.png' },
          // { name: 'assets/images/thumb6.png' },
      ]

  }

  ngOnInit() {
  }


}
