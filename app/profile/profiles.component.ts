import { Component } from '@angular/core';
import { SecurityService } from '../security/security.service'
import { User } from '../security/user.model'
import { Role } from '../security/role.model'

@Component({
    selector: 'udm-profiles',
    template:`
        <h2>Profiles</h2>
        <div *ngFor="let user of users">{{user.name}}</div>
        <div *ngFor="let role of roles">{{role.name}}</div>
    `
})
export class ProfilesComponent {

    private users:User[]
    private roles:Role[]

    constructor (
        private securityService: SecurityService
    ) {
        securityService.getUsers().then(users => {
            this.users = users;
        })

        securityService.getRoles().then(roles => {
            this.roles = roles;
        })

    }
}