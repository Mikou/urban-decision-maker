import { OnInit, Component, NgZone } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
    selector: 'udm-notification',
    template: `
        <div>{{message}}</div>
    `
})
export class NotificationComponent implements OnInit {

    message = "empty";

    constructor (
        private _notificationSvc: NotificationService,
        private zone:NgZone
    ) {

    }

    ngOnInit() {
        this._notificationSvc.message.subscribe(message => {
            this.zone.run( () => this.message = message );
        });
    }

}