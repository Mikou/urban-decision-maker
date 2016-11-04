import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { DecisionspaceService } from './decisionspace.service'
import { ConnectionService} from '../socketFactory/connection.service';

@Component({
    selector: 'ud2d-decisionspaces',
    styles: [`
        .decisionspace-thumb {
            background-color:#fff;
            padding:20px;
            margin:5px;
            border:1px #ccc solid;
        }

        .decisionspace-thumb .name {
            text-transform:capitalize;
            margin-bottom:10px;
        }
    `],
    template: `
        <h2>List of all decision spaces</h2>
        <div>
            <div *ngIf="!decisionspaces">No decision space could be found</div>
            <div class="decisionspace-thumb" *ngFor='let dspace of decisionspaces'>
                <div class="name">{{dspace.name}}</div>
                <div class="name">{{dspace.description}}</div>
                <button (click)="onClick(dspace)">join</button>
            </div>
        </div>
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