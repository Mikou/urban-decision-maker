/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { SecurityService } from './security/security.service';
import { NotificationComponent } from './notification/notification.component';
import { AppState } from './app.service';
import { MenuComponent } from './menu.component';
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <udm-notification></udm-notification>
    <div class="nav-bar">
      <nav>
        <span>
          <a [routerLink]=" ['./'] ">
            Home
          </a>
        </span>
        <span>
          <a [routerLink]=" ['./decisionspaces'] ">
            Decision Spaces
          </a>
        </span>
        <udm-security></udm-security>
      </nav>
    </div>
    <div class="globalContainer">
      <udm-menu *ngIf="displayMenu"></udm-menu>
      <div class="content">
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer>
      <div class="note"><p>urban decision maker <a [href]="url">@udm</a></p></div>
    </footer>
  `
})
export class AppComponent {
  udmLogo:string = 'assets/img/udm-logo.png';
  name:string = 'Urban Decision Maker';
  url:string = 'https://twitter.com/udm';
  displayMenu:boolean = true;

  constructor(
    private securityService: SecurityService,
    public appState: AppState) {
  }

  ngOnInit() {
    this.securityService.selectedUser$.subscribe(
      user => {
        if(user) {
          let role = user.roles.toString();
          if(role === 'admin')
            this.displayMenu = true;
        }
      }
    )
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
