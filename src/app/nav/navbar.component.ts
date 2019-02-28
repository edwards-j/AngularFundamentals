import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService } from '../events';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [
        `
            .nav.navbar-nav {
                font-size: 15px;
            }
            #searchForm {
                margin-right: 100px;
            }
            li > a.active {
                color: #f97924;
            }
            @media (max-width: 1200px) {
                #searchForm {
                    display: none;
                }
            }
        `
    ]
})
export class NavbarComponent {
    constructor(
        public authService: AuthService,
        private eventService: EventService
    ) {}

    searchTerm: string = '';
    foundSessions: ISession[];

    searchSessions(searchTerm) {
        this.eventService.searchSessions(searchTerm).subscribe(sessions => {
            this.foundSessions = sessions;
            console.table(this.foundSessions);
        });
    }
}
