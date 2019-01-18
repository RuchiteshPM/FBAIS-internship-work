import {Component, Input, OnInit} from '@angular/core';
import {CourseDataService} from '../../../course-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input() courseTitle;
  @Input() courseDescription;
  @Input() courseImage;

  constructor(private courseDataInstance:CourseDataService,private router:Router) { }

  ngOnInit() {
  }
onNavigate(title:string){
    console.log(title);
    this.courseDataInstance.loadTag=title;
    this.router.navigate(['/courses'])
}
}
