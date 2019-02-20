import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from '../shared/event.service';

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private eventService: EventService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot) {
        const eventExists = !!this.eventService.getEvent(+route.params['id']);

        // if the route doesn't exist, (ex. /events/42), then navigate to the 404 page
        if (!eventExists) {
            this.router.navigate(['/404']);
        }

        // if the route does exist, return 'true'
        return eventExists;
    }
}
