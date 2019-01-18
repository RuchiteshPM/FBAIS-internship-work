import {Component, OnInit} from '@angular/core';
import {CourseDataService} from '../../course-data.service';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
    courses:[{courseTitle:string,courseDescription:string,courseImage:string}];
    constructor(private courseDataInstance:CourseDataService){
        this.courses=this.courseDataInstance.courses
    }
    ngOnInit() {
    }

}
