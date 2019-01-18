import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-companytag',
  templateUrl: './companytag.component.html',
  styleUrls: ['./companytag.component.scss']
})
export class CompanytagComponent implements OnInit {
  @Input() public path;
  constructor() { }

  ngOnInit() {
  }

}
