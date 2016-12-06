import{ Component, OnInit, OnChanges, Input, NgZone } from '@angular/core';
import{ Router } from '@angular/router';

import { User } from './user.model';

import { SecurityService } from './security.service';

@Component({
    selector: 'udm-security',
    styles: [`
        p {
            margin:0;
        }
    `],
    template: `
        <div *ngIf="username==null">
        <span>
          <a [routerLink]=" ['./login'] ">
            Login
          </a>
        </span>
        </div>
        <div *ngIf="username!=null">hi, {{username}} | 
            <span>
            <a [routerLink]=" ['./logout'] ">
                Logout
            </a>
            </span>
        </div>
      `
})
export class SecurityComponent implements OnInit {
    userlist:User[];
    username:string = "";

    constructor(
        private securityService: SecurityService,
        private zone:NgZone,
        private router:Router
    ) {
        this.username=null;
    }

    ngOnInit() {
        this.securityService.getUsers().then(users => {
            this.userlist = users;
        });

        this.securityService.selectedUser$.subscribe( (user:User) => {
            if(user != null)  
                this.zone.run( () => this.username = user.username );
        });
    }

    ngOnChanges() {
        console.log("Change detected");
    }
    
    stringify(o:any): string{
        return JSON.stringify(o);
    }

    updateSelectedValue(e:any) {
        console.log("UPDATE", e);
        let user:User = JSON.parse(e);
        this.securityService.setAuthentication(user);
    }
}