import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { BasicelementsComponent } from './basicelements/basicelements.component';
import { ComponentsComponent } from './components.component';
import {YoutubeComponent} from './basicelements/youtube/youtube.component';
import { SliderComponent } from './slider/slider.component';
import {Ng2CarouselamosModule} from 'ng2-carouselamos';
import { CourseComponent } from './courses/course/course.component';
import { CompanytagsComponent } from './companytags/companytags.component';
import { CoursesComponent } from './courses/courses.component';
import { CompanytagComponent } from './companytags/companytag/companytag.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FeaturesComponent } from './features/features.component';
import { CounterComponent } from './counter/counter.component';
import { NewsUpdateComponent } from './basicelements/news-update/news-update.component';
import {RouterModule} from '@angular/router';




@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module,
        Ng2CarouselamosModule,
        RouterModule

    ],
    declarations: [
        ComponentsComponent,
        BasicelementsComponent,
        YoutubeComponent,
        SliderComponent,
        CourseComponent,
        CompanytagsComponent,
        CoursesComponent,
        CompanytagComponent,
        TestimonialsComponent,
        FeaturesComponent,
        CounterComponent,
        NewsUpdateComponent,




    ],
    entryComponents: [],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
