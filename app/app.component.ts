import { Component } from '@angular/core';
import {ToolbarComponent} from './toolbar/toolbar.component'

@Component({
  selector: 'ud2d',
  template: `
    <h1>{{title}}</h1>
    <div id="content">
      <ud2d-toolbar></ud2d-toolbar>
      <ud2d-canvas></ud2d-canvas>
    </div>
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
export class AppComponent {
  title = 'UD2D';
}