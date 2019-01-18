import { Component, OnInit, Renderer } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})

export class ComponentsComponent implements OnInit {
    // courses=[{
    //     courseTitle:'Python Core & Advance',
    //     courseDescription:'Python is a widely used high-level programming language for general-purpose programming. Python is one of those rare languages which can claim to be both simple and powerful.',
    //     courseImage:'../../../assets/img/FBAIS/c1.png'
    // },{
    //     courseTitle:'Data Analytics with Python',
    //     courseDescription:'Data analysis is a process of inspecting, cleansing, transforming, and modeling data with the goal of discovering useful information, informing conclusions, and supporting decision-making.',
    //     courseImage:'../../../assets/img/FBAIS/c2.png'
    // },{
    //     courseTitle:'Machine learning',
    //     courseDescription:'Machine learning is a field of computer science that uses statistical techniques to give computer systems the ability to "learn" with data, without being explicitly programmed.',
    //     courseImage:'../../../assets/img/FBAIS/c3.png'
    // }
    // ,{
    //     courseTitle:'Data Science with Python',
    //     courseDescription:'Job Oriendted data science course specially designed for Job seekers with value added projects and curriculum.100% Placement assistence will be provided.',
    //     courseImage:'../../../assets/img/FBAIS/c4.png'
    // },{
    //     courseTitle:'Data Science With R',
    //     courseDescription:'R is a programming language and free software environment for statistical computing and graphics supported by the R Foundation for Statistical Computing.',
    //     courseImage:'../../../assets/img/FBAIS/c5.png'
    // },{
    //     courseTitle:'Deep Learning & A.I',
    //     courseDescription:'Deep learning is part of a broader family of machine learning methods based on learning data representations, as opposed to task-specific algorithms.',
    //     courseImage:'../../../assets/img/FBAIS/c6.png'
    // }
    // ]
    page = 4;
    page1 = 5;
    date: {year: number, month: number};
    model: NgbDateStruct;
    constructor( private renderer : Renderer) {}
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;
    }

    ngOnInit() {
        let input_group_focus = document.getElementsByClassName('form-control');
        let input_group = document.getElementsByClassName('input-group');
        for (let i = 0; i < input_group.length; i++) {
            input_group[i].children[0].addEventListener('focus', function (){
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function (){
                input_group[i].classList.remove('input-group-focus');
            });
        }
    }

}
