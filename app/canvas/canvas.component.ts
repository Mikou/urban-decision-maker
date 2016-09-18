import { Component, Output, EventEmitter } from '@angular/core';

import { MakeDroppable } from '../shared/draggable/make-droppable.directive';
import { WidgetlistComponent } from './widget/widgetlist.component'

@Component({
  selector: 'ud2d-canvas',
  styles:[`
  .canvas-content {
    position: absolute;
    top: 70px;
    bottom: 0;
    right: 0;
    left: 0;
  }
  `],
  template: `
    <h2>{{title}}</h2>
    <div class='canvas-content' makeDroppable (dropped)="widgetlist.droppedWidget($event)">
      <ud2d-widgetlist #widgetlist></ud2d-widgetlist>
    </div>
  `
})

export class CanvasComponent {
  title = 'canvas';
}