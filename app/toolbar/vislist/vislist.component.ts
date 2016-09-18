import { Component } from '@angular/core';

import { VislistitemComponent} from './vislistitem.component';

@Component({
  selector: 'ud2d-vislist',
  template: `
    <h3>{{title}}</h3>
    <ud2d-vislistitem 
      *ngFor="let visitem of visitems" 
      [item]="visitem"
    >
    </ud2d-vislistitem>
  `
})

export class VislistComponent {
  title = 'visualization browser';

  visitems = [
    {id:0, type:"visItem", name:"vis0", url:"http://dummyvis.com/#0"},
    {id:1, type:"visItem", name:"vis1", url:"http://dummyvis.com/#1"},
    {id:2, type:"visItem", name:"vis2", url:"http://dummyvis.com/#2"},
    {id:3, type:"visItem", name:"vis3", url:"http://dummyvis.com/#3"},
    {id:4, type:"visItem", name:"vis4", url:"http://dummyvis.com/#4"},
    {id:5, type:"visItem", name:"vis5", url:"http://dummyvis.com/#5"},
    {id:6, type:"visItem", name:"vis6", url:"http://dummyvis.com/#6"},
    {id:7, type:"visItem", name:"vis7", url:"http://dummyvis.com/#7"},
  ];
}