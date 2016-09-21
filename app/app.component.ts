import { Component } from '@angular/core';

import { DecisionspacesComponent } from './decisionspace/decisionspaces.component';
import { SecurityComponent } from './security/security.component';

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

    ud2d-security {
      position: absolute;
      right: 0;
      top: 0;
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

        <ud2d-security>ok</ud2d-security>

      </nav>
    </header>

    <content>
      <router-outlet></router-outlet>
    </content>

    <footer>ud2d project</footer>    
  `
})
export class AppComponent {
  title = 'UD2D';
}