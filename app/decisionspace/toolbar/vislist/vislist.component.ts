import { Component, OnInit } from '@angular/core';
import { ConnectionService} from '../../../socketFactory/connection.service';

import { VislistitemComponent} from './vislistitem.component';
import { CreateVisCtrlComponent} from './createVisCtrl.component';


@Component({
  selector: 'ud2d-vislist',
  styles: [
    `
      ud2d-vislistitem {
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
    <ud2d-vislistitem 
      *ngFor="let visCtrl of visCtrls" 
      [item]="visCtrl"
    >
    </ud2d-vislistitem>
    <udm-createVisCtrl></udm-createVisCtrl>
  `
})

export class VislistComponent {
  title = 'visualization browser';

  constructor (
    private connectionService: ConnectionService
  ) {
    
  }

  ngOnInit() {
    this.getVisCtrls();
  }

  getVisCtrls() {
    this.connectionService.call('udm.backend.visCtrlList', []).then( (visCtrls:any) => {
        this.visCtrls = visCtrls;
    });
  };

  visCtrls:any = [];

  /*visitems = [
    {id:0, type:"visItem", name:"vis0", url:"http://dummyvis.com/#0"},
    {id:1, type:"visItem", name:"vis1", url:"http://dummyvis.com/#1"},
    {id:2, type:"visItem", name:"vis2", url:"http://dummyvis.com/#2"},
    {id:3, type:"visItem", name:"vis3", url:"http://dummyvis.com/#3"},
    {id:4, type:"visItem", name:"vis4", url:"http://dummyvis.com/#4"},
    {id:5, type:"visItem", name:"vis5", url:"http://dummyvis.com/#5"},
    {id:6, type:"visItem", name:"vis6", url:"http://dummyvis.com/#6"},
    {id:7, type:"visItem", name:"vis7", url:"http://dummyvis.com/#7"},
    {id:8, type:"visItem", name:"vis0", url:"http://dummyvis.com/#0"}
  ];*/
}