import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ServiceComponent,
    ProjectsComponent,
    ResumeComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ],
  exports:[
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ServiceComponent,
    ProjectsComponent,
    ResumeComponent,
    ContactUsComponent

  ]
})
export class LandingPageModule { }
