import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companytags',
  templateUrl: './companytags.component.html',
  styleUrls: ['./companytags.component.scss']
})
export class CompanytagsComponent implements OnInit {
  companypaths=[
      `../../../../assets/img/FBAIS/1.png`,
      `../../../../assets/img/FBAIS/2.png`,
      `../../../../assets/img/FBAIS/3.png`,
      `../../../../assets/img/FBAIS/4.png`,
      `../../../../assets/img/FBAIS/5.png`,
      `../../../../assets/img/FBAIS/6.png`,
      `../../../../assets/img/FBAIS/7.png`,
      `../../../../assets/img/FBAIS/8.png`,
  ]
  constructor() { }

  ngOnInit() {
  }

}
