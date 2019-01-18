import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import {  CourseDataService } from './course-data.service';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeModule } from './home/home.module';
import {AgmCoreModule} from '@agm/core';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { VideoPageComponent } from './video-page/video-page.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
// import {YoutubeComponent} from './components/youtube/youtube.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    NavbarComponent,
    FooterComponent,
    CourseDetailsComponent,
    VideoPageComponent,
    ChatbotComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule

  ],
  providers: [CourseDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
