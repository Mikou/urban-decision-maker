import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {BehaviorSubject}      from 'rxjs/BehaviorSubject';


//http://stackoverflow.com/questions/33675155/creating-and-returning-observable-from-angular-2-service

@Injectable()
export class AppService {

    private websocket: any
    private ws:any;

    connect() { 
        /*var socketURL = (('ws://127.0.0.1:8000/app/'));
        this.ws = new WebSocket(socketURL);
        this.ws.onmessage = function (message:String) {
            console.log(message);
        }
        this.ws.onopen = function() {
            var obj = {
                private:true,
            }
            this.send(JSON.stringify(obj));
        }

        this.ws.onmessage = function (msg:String) {
            console.log("RECEIVED:", msg["data"]);
        }*/
    }

    getConnection() {
        return this.ws;
    }

    disconnect() {
        this.ws.close();
    }
}