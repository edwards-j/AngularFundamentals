import { Component, Input } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template: `
        <div class="well hoverwell thumbnail">
            <h2>{{ event.name }}</h2>
            <div>Date: {{ event.date }}</div>
            <div>Time: {{ event.time }}</div>
            <div>Price: \${{ event.price }}</div>
            <div>
                <span>Location: {{ event.location.address }}</span>
                <span class="pad-left"
                    >{{ event.location.city }},
                    {{ event.location.country }}</span
                >
            </div>
            <h3>Sessions</h3>
            <div *ngFor="let s of event.sessions">
                <hr />
                <div>Name: {{ s.name }} | Difficulty: {{s.level}}</div>
                <div>Presenter: {{ s.presenter }}</div>
                <p>Abstract: {{s.abstract}}</p>
            </div>
        </div>
    `,
    styles: [
        `
            .pad-left: {
                margin-left: 1000px;
            }
            ,
            .well div {
                color: #bbb;
            }
        `
    ]
})
export class EventThumbnailComponent {
    @Input() event: any;
}
