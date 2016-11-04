import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject }      from 'rxjs/BehaviorSubject';
import { ConnectionService} from '../../../socketFactory/connection.service';

//http://stackoverflow.com/questions/33675155/creating-and-returning-observable-from-angular-2-service

@Injectable()
export class VisCtrlService {

    public visCtrls:any[];

    constructor(private connectionService: ConnectionService) {

    }

    ngOnInit() {
        /*this.socketFactoryService.mess ages.subscribe(msg => {
          console.log("desicionspace service:", msg);
        })*/
    }


    getControls () {
        return this.connectionService.call('udm.backend.visCtrls', []);
    }
}