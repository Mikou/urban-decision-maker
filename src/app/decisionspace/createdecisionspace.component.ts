import{ Component, OnInit, Input } from '@angular/core';
import { ConnectionService } from '../socketFactory/connection.service';
import { SecurityService } from '../security/security.service';

import { DecisionSpace } from './decisionspace.model';

@Component({
    selector: 'ud2d-register',
    template: `
        <h2>create a new decision space</h2>
        <p><label for="name">Name</label><input id="name" name="name" type="text" [(ngModel)]="name" /></p>
        <p><label for="description">Description</label><input id="description" name="description" type="text" [(ngModel)]="description" /></p>
        <button (click)="onClick()">Submit</button>
      `
})
export class CreateDecisionspaceComponent implements OnInit {

    name:string;
    description:string;

    constructor(
        private _securitySvc: SecurityService,
        private _connectionSvc: ConnectionService
    ) {
    }

    ngOnInit() {

    }

    onClick() {

        let decisionspace:DecisionSpace = {
            name: this.name,
            description: this.description,
            userid: 1
        };

        this._connectionSvc.call('udm.backend.decisionspaceRegistration', [decisionspace]).then((data) => {
            console.log("data", data);
        }).catch( (err) => {
            console.log("ERROR", err);
        });
        return Promise.resolve("decision space created");

    }
}