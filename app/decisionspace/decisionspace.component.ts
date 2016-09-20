import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ToolbarComponent} from './toolbar/toolbar.component'

@Component({
  selector: 'ud2d',
  template: `
    <ud2d-toolbar></ud2d-toolbar>
    <ud2d-canvas [decisionspaceId]="'ds'">{{ds}}</ud2d-canvas>
  `,
  styles: [`
    #content {
      position:absolute;
      top:120px;
      left:0;
      right:0;
      bottom:40px;
      background-color:#eee;
      padding:10px;
    }
    ud2d-toolbar {
      position:absolute;
      top:10px;
      left:10px;
      width:300px;
      bottom:10px;
      background-color:#fff;
    }
    ud2d-canvas {
      position:absolute;
      top:10px;
      left:320px;
      right:10px;
      bottom:10px;
      background-color:#fff;
    }
  `]

})
export class DecisionspaceComponent {

  constructor(private activatedRoute: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      //console.log(params["id"]);
    });
  }
  ds = "test";
}