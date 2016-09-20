import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import { WIDGETS } from './mock-widgets';

@Injectable()
export class WidgetService {
    getWidgets(decisionspaceId:number): Promise<any[]> {
        return Promise.resolve(WIDGETS[decisionspaceId-1]);
    }

    getWidgetsSlowly(decisionspaceId:number): Promise<any[]> {
        return new Promise<any[]>(resolve =>
        setTimeout(resolve, 2000)) // delay 2 seconds
        .then(() => this.getWidgets(decisionspaceId));
    }
}