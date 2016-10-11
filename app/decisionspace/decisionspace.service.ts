import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject }      from 'rxjs/BehaviorSubject';
import { SocketFactoryService} from '../socketFactory/socketFactory.service';

//http://stackoverflow.com/questions/33675155/creating-and-returning-observable-from-angular-2-service

@Injectable()
export class DecisionspaceService {

    public decisionspaces:any[];

    constructor(private socketFactoryService:SocketFactoryService) {

    }

    ngOnInit() {
        /*this.socketFactoryService.messages.subscribe(msg => {
          console.log("desicionspace service:", msg);
        })*/
    }

    updateDecisionspaces(arr:any) {
        console.log(JSON.parse(arr));
        
    }

}