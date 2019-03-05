import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';

import { IEvent } from '../shared/index';

@Component({
    templateUrl: './event-details.component.html',
    styles: [
        `
            .container {
                padding: 0 20px;
            }
            .event-image {
                height: 100px;
            }
        `
    ]
})
export class EventDetailsComponent implements OnInit {
    event: IEvent;

    filterBy: string = 'all';
    sortBy: string = 'votes';

    constructor(
        private eventService: EventService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.event = this.eventService.getEvent(+params['id']);
        });
    }
}
