import { Injectable } from '@angular/core'

export class ConnectionService {
    private connection:any;
    constructor() {
        const url:string = "ws://127.0.0.1:8082/ws";
        this.connection = new window["autobahn"].Connection({url: url, realm: 'realm1'});
        this.connection.open();
   }
   call(endpoint:string, args:any): Promise<any> {
       let connection = this.connection;
        
       if(!connection.isOpen) {
       let promise = new Promise( (resolve, reject) => {
                function tryCall () {
                    if(connection.isOpen) {
                        connection.session.call(endpoint, args).then((data) => {
                            console.log("RESUT:", data);
                            resolve(data);
                        }).catch((err) => {
                            reject(err);
                        });
                    } else {
                        // It would probably be nicer to add some extra time for every trial.
                        setTimeout(tryCall, 10);
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