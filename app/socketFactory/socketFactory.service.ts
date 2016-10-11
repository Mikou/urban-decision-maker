import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'


export interface Message {
    action: string;
    author: string;
    module: string;
    message: string;
}

@Injectable()
export class SocketFactoryService {

    public messages: Subject<Message>;
    private subject: Subject<MessageEvent>;
    private ws:any;

    constructor(
    ) {
        this.messages = <Subject<Message>>this
        .connect("ws://127.0.0.1:8000/app")
        .map((response:MessageEvent): Message => {
            let data = JSON.parse(response.data);
            return {
                action: 'get',
                module: data.module,
                author: data.author,
                message: data.message
            }
        });

        this.ws.onopen = function () {
            this.messages.next({
                action:'GET',
                module: 'decisionspaces',
                author:"dodo",
                message: 'hello'
            })

        }.bind(this)

        this.messages.subscribe(msg => {
            console.log("RECEVIED");
            console.log(msg);
        });
    }

    public connect(url:string): Subject<MessageEvent> {
        if(!this.subject) {
            this.subject = this.create(url);
        }

        return this.subject;
    }

    public create(url:string): Subject<MessageEvent> {
        this.ws = new WebSocket(url);
        let observable = Observable.create((obs:Observable<MessageEvent>) => {
            this.ws.onmessage = obs["next"].bind(obs);
            this.ws.onerror = obs["error"].bind(obs);
            this.ws.onclose = obs["complete"].bind(obs);

            return this.ws.close.bind(this.ws);
        })

        let observer = {
            next: (data: Object) => {
                if (this.ws.readyState === WebSocket.OPEN) {
                    this.ws.send(JSON.stringify(data));
                }
            },
        }

        return Subject.create(observer, observable);
    }
}