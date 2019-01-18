import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  constructor() { }
    features=["100% Syllabus coverage","Experienced faculties","Periodic assessment tests","Doubt clarification session","Regular counselling","Individual attention to all students"];
  ngOnInit() {
  }

}
