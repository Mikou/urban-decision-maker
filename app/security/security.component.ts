import{ Component, OnInit, Input } from '@angular/core';

import { User } from './user.model';

import { SecurityService } from './security.service';

@Component({
    selector: 'ud2d-security',
    template: `
        <p>hi, {{username}}</p>
      `
})
export class SecurityComponent implements OnInit {
    userlist:User[];
    username:string;

    constructor(
        private securityService: SecurityService
    ) {
        this.username="mysterious user";
    }

    ngOnInit() {

        this.securityService.getUsers().then(users => {
            this.userlist = users;
        });

        this.securityService.selectedUser$.subscribe((user:User) => {
            console.log(user);
            if(user != null) 
                this.username = user.username;
        })
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