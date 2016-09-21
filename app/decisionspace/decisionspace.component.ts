import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ToolbarComponent} from './toolbar/toolbar.component'

import { SecurityService } from '../security/security.service';

@Component({
  selector: 'ud2d',
  template: `
    <div class="wrapper">
      <ud2d-toolbar *ngIf="role==='admin'"></ud2d-toolbar>
      <ud2d-canvas [decisionspaceId]="'ds'" [ngClass]="role"></ud2d-canvas>
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
    .wrapper { 
      background: #eee; 
      overflow:hidden; 
      position:relative; 
    }
    ud2d-toolbar {
      padding:0 10px;
      width: 200px; float: left; height: 200px;
      height:100%;
      background-color:#fff;
    }
    ud2d-canvas {
      position:relative;
      width: 100%; float:right;
      height:100%;
      background-color:#fff;
    }
    ud2d-canvas.admin {
      padding:0 10px;
      margin: 0 -250px 0 auto;
    }
  `]
})
export class DecisionspaceComponent {

  role:string

  constructor(
    private activatedRoute: ActivatedRoute,
    private securityService: SecurityService
  ) {
    
  }

  ngOnInit() {
    this.securityService.selectedUser$.subscribe(
      user => {
        if(user) {
          this.role = user.role;
        }
      }
    )
  }
}