import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from './voter.service';

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent {
    @Input() sessions;
    @Input() filterBy: string;
    @Input() sortBy: string;

    visibleSesions: ISession[] = [];

    constructor (private auth: AuthService, private voterService: VoterService) {}

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name'
                ? this.visibleSesions.sort(sortByNameAscending)
                : this.visibleSesions.sort(soryByVotesDesc);
        }
    }

    toggleVote(session: ISession) {
        if(this.userHasVoted(session)) {
            this.voterService.deleteVoter(session, this.auth.currentUser.userName);
        } else {
            this.voterService.addVoter(session, this.auth.currentUser.userName)
        }

        if (this.sortBy === 'votes') {
            this.visibleSesions.sort(soryByVotesDesc);
        }
    }

    userHasVoted(session: ISession) {
        return this.voterService.userHasVoted(session, this.auth.currentUser.userName)
    }


    filterSessions(filter) {
        if (filter === 'all') {
            this.visibleSesions = this.sessions.slice(0);
        } else {
            this.visibleSesions = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filter;
            });
        }
    }
}

function sortByNameAscending(s1: ISession, s2: ISession) {
    if (s1.name > s2.name) {
        return 1;
    } else if (s1.name === s2.name) {
        return 0;
    } else {
        return -1;
    }
}

function soryByVotesDesc(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length;
}
