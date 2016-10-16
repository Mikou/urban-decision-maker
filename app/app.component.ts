import { Component } from '@angular/core';

import { DecisionspacesComponent } from './decisionspace/decisionspaces.component';
import { SecurityComponent } from './security/security.component';
import { AppService } from './app.service'

import {SocketFactoryService} from './socketFactory/socketFactory.service'


@Component({
  selector: 'ud2d',
  styles: [`

    header {
      position:absolute;
      top:0; left:0; right:0; bottom:50px;
    }

    header h1 {
      float:left;
      margin:0 5px;
    }

    header nav {
      padding:1em;
    }

    header nav .profile {
      float:right;
    }

    content {
      position:absolute;
      top:50px; left:0; right:0; bottom:20px;
      overflow: auto;
      background-color:#eee;
      padding:10px;
    }

    footer {
      position:absolute;
      left:0; right:0; bottom:0;
    }

  `],
  template:
    `
    <header>
      <h1><a routerLink="/" routerLinkActive="active">{{title}}</a></h1>
      <nav>
        <a routerLink="/decisionspaces" routerLinkActive="active">All decision spaces</a>
        <a routerLink="/decisionspaces">My decision spaces</a>
        <a routerLink="/login">Login</a>
        <a routerLink="/register">Register</a>
        <a routerLink="/people">People</a>
        <div class="profile"><ud2d-security></ud2d-security></div>

      </nav>
    </header>

    <content>
      <router-outlet></router-outlet>
    </content>

    <footer>udm project</footer>    
  `
})
export class AppComponent {

  constructor(private _appService: AppService,
    private socketFactoryService: SocketFactoryService
  ) {}

  ngOnInit() {
    //this._appService.connect();
    console.log("Ok, Autobahn loaded", window["autobahn"].version);

    

  }

  title = 'UDM';

}