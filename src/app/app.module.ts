import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { ROUTES } from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VenuesComponent } from './venues/venues.component';
import { VenuesListComponent } from './venues/venues-list/venues-list.component';

import { VenuesService } from './venues/venues.service';
import { VenueDetailComponent } from './venues/venue-detail/venue-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VenuesComponent,
    VenuesListComponent,
    VenueDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [VenuesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
