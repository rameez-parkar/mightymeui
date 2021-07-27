import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeSelectorComponent } from './components/time-selector/time-selector.component';
import { DateSelectorComponent } from './components/date-selector/date-selector.component';
import { SeatsAvailabilityComponent } from './components/seats-availability/seats-availability.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeSelectorComponent,
    DateSelectorComponent,
    SeatsAvailabilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
