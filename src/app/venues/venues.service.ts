import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { environment } from '../../environments/environment'

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class VenuesService {

    constructor(
        private http: Http
    ){}

    getTopVenues(): Observable<Event[]> {   
        return this.http.get(`${environment.api}/explore?client_id=${environment.clientId}&client_secret=${environment.clientSecret}&v=20170903&near=Dublin,Ireland&section=topPicks&limit=20`)
            .map(res => res.json().response.groups[0].items)
    }

    getVenueDetail(id: string): Observable<Event[]> {
        return this.http.get(`${environment.api}/${id}?client_id=${environment.clientId}&client_secret=${environment.clientSecret}&v=20170903`)
            .map(res => res.json().response.venue)
    }
}