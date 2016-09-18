import {Component, Input} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'ud2d-visualization',
    template: `
        <iframe [src]="visUrl"></iframe>
    `
})
export class VisualizationComponent {
    @Input() config: any;

    visUrl:any;
    
    constructor(private domSanitizer:DomSanitizer) {}

    ngOnInit() {
        this.visUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.config.url);
    }
}