import { Routes } from '@angular/router';
import { VenuesComponent } from './venues/venues.component'
import { VenueDetailComponent } from './venues/venue-detail/venue-detail.component'


export const ROUTES: Routes = [
    { path: '', component: VenuesComponent },
    { path: 'detail/:id', component: VenueDetailComponent }
]