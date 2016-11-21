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
                let delay:number = 10;
                function tryCall () {
                    if(connection.isOpen) {
                        connection.session.call(endpoint, args).then((data) => {
                            resolve(data);
                        }).catch((err) => {
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