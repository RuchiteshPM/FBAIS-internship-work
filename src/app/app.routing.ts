import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import {CourseDetailsComponent} from './course-details/course-details.component';
import {VideoPageComponent} from './video-page/video-page.component';


const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path:'courses',            component:CourseDetailsComponent},
    {path:'testimonials',            component:VideoPageComponent},
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
