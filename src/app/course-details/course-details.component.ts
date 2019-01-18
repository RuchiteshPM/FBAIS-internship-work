import {Component, OnInit} from '@angular/core';
import {CourseDataService} from '../course-data.service';
import * as $ from 'jquery';

@Component({
    selector: 'app-course-details',
    templateUrl: './course-details.component.html',
    styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
    displayObj:{courseTitle:string,courseDescription:string,courseImage:string,syllabus:[string]};
    courses:[{courseTitle:string,courseDescription:string,courseImage:string,syllabus:[string]}];

    constructor(public cd: CourseDataService) {

        this.courses = cd.courses;
        this.displayObj = this.courses.find(x => x.courseTitle === this.cd.loadTag);
    }

    ngOnInit() {
       this.implementStyle();
    }
    implementStyle(){
        $(function() {
            var ua = navigator.userAgent,
                event = (ua.match(/iPad/i)) ? "touchstart" : "click";
            if ($('.table').length > 0) {
                $('.table .header').click( function() {
                    $(this).toggleClass("active").nextUntil('.header').css('display', function(i, v) {
                        return this.style.display === 'table-row' ? 'none' : 'table-row';
                    });
                });
            }
        })
    }
    onChange(event: Event) {
        this.displayObj = this.courses.find(x => x.courseTitle === (event.target as HTMLInputElement).value);
        this.implementStyle();
    }
}
