import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireAnalyticsModule } from '@angular/fire/analytics';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionMainComponent } from './sections/section-main/section-main.component';
import { SectionAboutComponent } from './sections/section-about/section-about.component';
import { SectionExperienceComponent } from './sections/section-experience/section-experience.component';
import { SectionWorkComponent } from './sections/section-work/section-work.component';
import { SectionContactComponent } from './sections/section-contact/section-contact.component';
import { AngularFireModule } from '@angular/fire';
import { environment, firebaseConfig } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SectionMainComponent,
    SectionAboutComponent,
    SectionExperienceComponent,
    SectionWorkComponent,
    SectionContactComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAnalyticsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
