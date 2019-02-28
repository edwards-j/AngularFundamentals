import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver
} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar.component';

import { EventService } from './events/shared/event.service';
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { CollapsibleWellComponent } from './common/collapsible-well.component';

import { appRoutes } from './routes';

import { Error404Component } from './errors/404.component';

import { AuthService } from './user/auth.service';
import { SessionListComponent } from './events/event-details/session-list.component';

declare let toastr: Toastr;

@NgModule({
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavbarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        SessionListComponent,
        CollapsibleWellComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        EventService,
        {
            provide: TOASTR_TOKEN, useValue: toastr
        },
        EventRouteActivator,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        },
        EventListResolver,
        AuthService
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty) {
        return window.confirm(
            'You have not saved this event. Are you sure you want to cancel?'
        );
    }

    return true;
}
