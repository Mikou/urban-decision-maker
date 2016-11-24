import {Component, Input} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'ud2d-visualization',
    template: `
        <div *ngIf="errorMessage">
            <div class="message">{{errorMessage}}</div>
        </div>
        <div *ngIf="!errorMessage">
            <iframe [src]="visUrl"></iframe>
        </div>
    `
})
export class VisualizationComponent {
    @Input() config: any;

    visUrl:any;
    errorMessage:string;
    
    constructor(private domSanitizer:DomSanitizer) {}

    ngOnInit() {
        if(this.config) {
            this.visUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.config.url);
        } else {
            this.errorMessage = "A problem occured. This visualization cannot be shown";
        }
    }
}