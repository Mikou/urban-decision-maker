import { Injectable, Inject } from '@angular/core';
import { NotificationService } from '../notification/notification.service';
export class ConnectionService {
    private connection:any;

    constructor(
        @Inject(NotificationService) notificationService: NotificationService
    ) {
        const url:string = "ws://127.0.0.1:8082/ws";
        this.connection = new window["autobahn"].Connection({url: url, realm: 'realm1'});
        this.connection.open();
        this.connection.onclose = function (reason, details) {
            if(reason == "unreachable") {
                const msg = "The server application is unreachable. Maybe it is idle?";
                console.log(msg);
                notificationService.notify(msg);
            }
        // connection closed, lost or unable to connect
        };

   }
   call(endpoint:string, args:any): Promise<any> {
       let connection = this.connection;
       if(!connection.isOpen) {
       let promise = new Promise( (resolve, reject) => {
                let delay:number = 10;
                function tryCall () {
                    if(connection.isOpen) {
                        connection.session.call(endpoint, args).then((data) => {
                            resolve(data);
                        }).catch((err) => {
                            let errorMessage = "Could not connect to the Server. Check that the server app is running";
                            console.log(errorMessage);
                            reject(err);
                        });
                    } else {
                        setTimeout(tryCall, delay = delay*2);
                    }
                }
                tryCall();
            });
            return promise;
        } else {
            return this.connection.session.call(endpoint, args);
        }
    }
}