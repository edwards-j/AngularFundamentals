import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';

import { ActivatedRoute } from '@angular/router';
import { fromEventPattern } from 'rxjs';

import { IEvent } from './shared/index';

declare let toastr: any;

@Component({
    template: `
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr />
            <div class="row">
                <div class="col-md-5" *ngFor="let e of events">
                    <event-thumbnail [event]="e"></event-thumbnail>
                </div>
            </div>
        </div>
    `
})
export class EventsListComponent implements OnInit {
    events: IEvent[];
    constructor(
        private eventService: EventService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.events = this.route.snapshot.data['events'];
    }
}
