import { Component } from '@angular/core';

import { DecisionspacesComponent } from './decisionspace/decisionspaces.component';
import { SecurityComponent } from './security/security.component';
import { AppService } from './app.service'

import {SocketFactoryService} from './socketFactory/socketFactory.service'


@Component({
  selector: 'ud2d',
  styles: [`

  `],
  template:
    `
    <p>{{title}}</p>

  `
})
export class HomeComponent {

  constructor(
  ) {}

  ngOnInit() {

  }

  title = 'Urban Decision Maker';

}