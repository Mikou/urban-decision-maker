import{ Component, OnInit, Input } from '@angular/core';
import { ConnectionService } from '../socketFactory/connection.service';
import { SecurityService } from '../security/security.service';
import { Router } from '@angular/router';

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
        private _connectionSvc: ConnectionService,
        private router: Router
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
            let link = ['/decisionspaces'];
            this.router.navigate(link);
        }).catch( (err) => {
            console.log("ERROR", err);
        });
        return Promise.resolve("decision space created");

    }
}