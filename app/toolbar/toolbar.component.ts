import { Component } from '@angular/core';
import {VislistComponent} from './vislist/vislist.component'

@Component({
  selector: 'ud2d-toolbar',
  template: `
    <h2>{{title}}</h2>
    <ud2d-vislist></ud2d-vislist>
    <ud2d-featurelist></ud2d-featurelist>
  `
})

export class ToolbarComponent {
  title = 'toolbar';
}