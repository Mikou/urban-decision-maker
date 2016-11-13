import { Component, OnInit } from '@angular/core';
import { ConnectionService} from '../../../socketFactory/connection.service';

import { VisCtrlComponent} from './visCtrl.component';
import { VisCtrlService } from './visCtrl.service';
import { CreateVisCtrlComponent} from './createVisCtrl.component';

@Component({
  selector: 'ud2d-visctrls',
  styles: [
    `
<<<<<<< HEAD
      udm-visctrl {
=======
      ud2d-visctrl {
>>>>>>> fdbe35102fad73310ae0e9ce741a03ef926e09e5
        list-style: none;
        border: 1px solid #ccc;
        background-color:#eee;
        padding: 0 5px;
        float: left;
        width: 185px;
        margin: 5px 0;
        cursor: move;
      }
<<<<<<< HEAD

      udm-createVisCtrl {
        border:1px solid #ccc;
        opacity:0.5;
        float:left;
        padding:5px;
        font-size:.75em;
      }
=======
>>>>>>> fdbe35102fad73310ae0e9ce741a03ef926e09e5
    `
  ],
  template: `
    <h3>{{title}}</h3>
<<<<<<< HEAD
    <udm-visctrl 
      *ngFor="let visCtrl of visCtrls" 
      [item]="visCtrl"
    >
    </udm-visctrl>
=======
    <ud2d-visctrl 
      *ngFor="let visCtrl of visCtrls" 
      [item]="visCtrl"
    >
    </ud2d-visctrl>
>>>>>>> fdbe35102fad73310ae0e9ce741a03ef926e09e5
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
<<<<<<< HEAD
        this.visCtrls = visCtrls;
    });
    this.connectionService.call('udm.backend.visCtrls', []).then( (visCtrls:any) => {
        this.visCtrls = visCtrls;
=======
      this.visCtrls = visCtrls;
    });
    this.connectionService.call('udm.backend.visCtrls', []).then( (visCtrls:any) => {
      this.visCtrls = visCtrls;
>>>>>>> fdbe35102fad73310ae0e9ce741a03ef926e09e5
    });
  };

}