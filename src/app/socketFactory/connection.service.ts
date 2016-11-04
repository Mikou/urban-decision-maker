import { Injectable } from '@angular/core'

class Worker {
    callID: string;
    promise: Promise<any>;

    constructor(callID:string, promise:Promise<any>) {
        this.callID = callID,
        this.promise = promise;
    }
}

export class ConnectionService {
    private connection:any;
    private queue:Worker[];

    constructor() {
        const url:string = "ws://127.0.0.1:8082/ws";
        this.connection = new window["autobahn"].Connection({url: url, realm: 'realm1'});
        this.connection.open();
    }

    call(endpoint:String, args:any): Promise<any> {
        return this.connection.session.call(endpoint, args);
    }

}