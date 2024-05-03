import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { MaterialModule } from '../material.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { SlidePartnersComponent } from './components/slide-partners/slide-partners.component';
import { StpesComponent } from './components/stpes/stpes.component';

@NgModule({
    declarations:[
        AppComponent,
        HeaderComponent,
        HeroComponent,
        BenefitsComponent,
        SlidePartnersComponent,
        StpesComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
      ],
      providers: [
    provideAnimationsAsync()
  ],
      bootstrap: [AppComponent]
})

export class AppModule { }