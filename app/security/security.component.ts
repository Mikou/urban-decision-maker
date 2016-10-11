import{ Component, OnInit } from '@angular/core';

import { User } from './user.model';

import { SecurityService } from './security.service';

@Component({
    selector: 'ud2d-security',
    template: `
      <select [ngModel]="stringify(selectedObject)" (ngModelChange)="updateSelectedValue($event)">
        <option *ngFor="let user of userlist" [value]=stringify(user) >{{user.name}}({{user.role}})</option>
      </select>
      `
})
export class SecurityComponent implements OnInit {
    userlist:User[];

    constructor(
        private securityService: SecurityService
    ) {
    }

    ngOnInit() {
        this.securityService.getUsers().then(users => {
            this.userlist = users;
        });
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