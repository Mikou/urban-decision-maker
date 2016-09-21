import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'ud2d-decisionspaces',
    template: `
        <h2>List of all decision spaces</h2>
        <div *ngFor='let dspace of decisionspaces'>
            <div (click)="onClick(dspace)">{{dspace.name}}
            </div>
        </div>
    `
})
export class DecisionspacesComponent {

    constructor(
        private router: Router
    ) {}

    decisionspaces = [
        {id:1, name:'decision space 1', path: '1'},
        {id:2, name:'decision space 2', path: '2'},
        {id:3, name:'decision space 3', path: '3'},
        {id:4, name:'decision space 4', path: '4'},
        {id:4, name:'decision space 5', path: '5'}
    ]

    onClick(dspace:any) {
        let link = ['/decisionspaces', dspace.id];
        this.router.navigate(link);
    }
}