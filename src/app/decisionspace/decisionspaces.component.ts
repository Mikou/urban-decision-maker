import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { DecisionspaceService } from './decisionspace.service'
import { ConnectionService} from '../socketFactory/connection.service';

@Component({
    selector: 'ud2d-decisionspaces',
    styles: [`

    `],
    template: `
        <h2>List of all decision spaces</h2>
        <md-card>
            <div *ngIf="!decisionspaces">No decision space could be found</div>
            <div class="decisionspace-thumb" *ngFor='let dspace of decisionspaces'>
                <md-card-title class="name">{{dspace.name}}</md-card-title>
                <md-card-content class="name">{{dspace.description}}</md-card-content>
                <button (click)="onClick(dspace)" md-button>join</button>
            </div>
        </md-card>
        <div>
            <button (click)="newDecisionspace()">create a new decision space</button>
        </div>
    `
})
export class DecisionspacesComponent {

    decisionspaces:any[];

    constructor(
        private router: Router,
        private decisionspaceService: DecisionspaceService,
        private connectionService: ConnectionService,
        private zone:NgZone
    ) {}

    ngOnInit() {
        this.connectionService.call('udm.backend.decisionspaceList', []).then( (decisionspaces:any) => {
            this.zone.run( () => this.decisionspaces = decisionspaces );
        });
    }

    newDecisionspace() {
        let link = ['/create-decisionspace'];
        this.router.navigate(link);
    }

    onClick(dspace:any) {
        let link = ['/decisionspaces', dspace.id];
        this.router.navigate(link);
    }
}