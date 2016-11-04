import{ Component, OnInit, OnChanges, Input, NgZone } from '@angular/core';

import { User } from './user.model';

import { SecurityService } from './security.service';

@Component({
    selector: 'udm-security',
    template: `
        <p *ngIf="username==null">You are not logged in</p>
        <p *ngIf="username!=null">hi, {{username}}</p>
      `
})
export class SecurityComponent implements OnInit {
    userlist:User[];
    username:string = "";

    constructor(
        private securityService: SecurityService,
        private zone:NgZone
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