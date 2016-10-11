import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DecisionspaceService } from './decisionspace.service'
import { SocketFactoryService} from '../socketFactory/socketFactory.service';


@Component({
    selector: 'ud2d-decisionspaces',
    styles: [`
        .decisionspace-thumb {
            background-color:#fff;
            float:left;
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
        <div *ngIf="!decisionspaces">No decision space could be found</div>
        <div class="decisionspace-thumb" *ngFor='let dspace of decisionspaces'>
            <div class="name">{{dspace.name}}</div>

            <button (click)="onClick(dspace)">join</button>
        </div>
    `
})
export class DecisionspacesComponent {

    decisionspaces:any[];

    constructor(
        private router: Router,
        private decisionspaceService: DecisionspaceService,
        private socketFactoryService: SocketFactoryService
    ) {}

    /*decisionspaces = [
        {id:1, name:'decision space 1', path: '1'},
        {id:2, name:'decision space 2', path: '2'},
        {id:3, name:'decision space 3', path: '3'},
        {id:4, name:'decision space 4', path: '4'},
        {id:4, name:'decision space 5', path: '5'}
    ]*/

    ngOnInit() {

        console.log("SPACES:", this.decisionspaces);

        this.socketFactoryService.messages.subscribe(msg => {
          console.log("DEBUG", msg);
          this.decisionspaces = JSON.parse(msg.message);
        })

        this.socketFactoryService.messages.next({
            action:'GET',
            module: 'decisionspaces',
            author:"dodo",
            message: 'hello'
        });
        //this.decisionspaces = this.decisionspaceService.decisionspaces;
    }

    onClick(dspace:any) {
        let link = ['/decisionspaces', dspace.id];
        this.router.navigate(link);
    }
}