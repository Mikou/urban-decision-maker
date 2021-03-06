import { Component, NgZone }    from '@angular/core';
import { DecisionspaceService } from './decisionspace.service'
import { ConnectionService}     from '../socketFactory/connection.service';
import { Router }               from '@angular/router';
import { SecurityService }      from '../security/security.service';
//import { Guard }                from '../security/guard.decorator';
import { User }                 from '../security/user.model';
import { List }                 from 'immutable';

//@Guard('admin')
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

    decisionspaces:List<any>;

    constructor(
        private decisionspaceService: DecisionspaceService,
        private connectionService: ConnectionService,
        private securityService: SecurityService,
        private router: Router,
        private zone:NgZone
    ) {}

    

    ngOnInit() {
        const user:User = this.securityService.getCurrentUser();
        this.decisionspaceService.fetchList(user).subscribe(decisionspaces => {
            this.zone.run( () => this.decisionspaces = decisionspaces );
        });
    }

    newDecisionspace() {
        let link = ['/create-decisionspace'];
        this.router.navigate(link);
    }
}