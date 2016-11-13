import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class NotificationService {

    private _message: BehaviorSubject<string> = new BehaviorSubject<string>("");
    public message: Observable<string> = this._message.asObservable();

    constructor() {
        this.message.subscribe(res => {
            console.log("CHANGE", res);
        });   
    }

    notify(message:string) {
        console.log("NOTIFICATION SERVICE: ", message);
        this._message.next(message);
    }
}