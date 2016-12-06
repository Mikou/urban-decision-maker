import { Component, NgZone } from '@angular/core';
import { DecisionspaceService } from './decisionspace.service'
import { ConnectionService} from '../socketFactory/connection.service';
import { Router } from '@angular/router';

@Component({
    selector: 'udm-decisionspaces',
    styles: [`
        udm-decisionspace-preview {
            background-color:#fff;
            border:1px solid #ccc;
            display:block;
            margin:5px 0;
            padding:5px;
        }
    `],
    template: `
        <h2>List of all decision spaces</h2>
        <div>
            <div *ngIf="!decisionspaces">No decision space could be found</div>
            <udm-decisionspace-preview 
                class="decisionspace-thumb" 
                *ngFor='let dspace of decisionspaces' 
                [decisionspace]="dspace"
            ></udm-decisionspace-preview>
        </div>
        <div>
            <button (click)="newDecisionspace()">create a new decision space</button>
        </div>
    `
})
export class DecisionspacesComponent {

    decisionspaces:any[];

    constructor(
        private decisionspaceService: DecisionspaceService,
        private connectionService: ConnectionService,
        private router: Router,
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
}