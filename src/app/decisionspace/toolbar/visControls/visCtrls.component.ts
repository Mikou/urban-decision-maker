import { Component, OnInit } from '@angular/core';
import { ConnectionService} from '../../../socketFactory/connection.service';

import { VisCtrlComponent} from './visCtrl.component';
import { VisCtrlService } from './visCtrl.service';
import { CreateVisCtrlComponent} from './createVisCtrl.component';

@Component({
  selector: 'ud2d-visctrls',
  styles: [
    `
      ud2d-visctrl {
        list-style: none;
        border: 1px solid #ccc;
        background-color:#eee;
        padding: 0 5px;
        float: left;
        width: 185px;
        margin: 5px 0;
        cursor: move;
      }
    `
  ],
  template: `
    <h3>{{title}}</h3>
    <ud2d-visctrl 
      *ngFor="let visCtrl of visCtrls" 
      [item]="visCtrl"
    >
    </ud2d-visctrl>
    <udm-createVisCtrl></udm-createVisCtrl>
  `
})

export class VisCtrlsComponent {
  title = 'visualization browser';
  visCtrls:any = [];

  constructor (
    private connectionService: ConnectionService,
    private visCtrlService: VisCtrlService
  ) {
    
  }

  ngOnInit() {
    this.getVisCtrls();
  }

  getVisCtrls() {
    this.visCtrlService.getControls().then( (visCtrls:any) => {
      this.visCtrls = visCtrls;
    });
    this.connectionService.call('udm.backend.visCtrls', []).then( (visCtrls:any) => {
      this.visCtrls = visCtrls;
    });
  };

}