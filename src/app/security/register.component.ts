import{ Component, OnInit, Input } from '@angular/core';
import{ SecurityService } from './security.service';
import { User } from './user.model';

@Component({
    selector: 'ud2d-register',
    template: `
        <h2>user registration</h2>
        <p><label for="login">Name</label><input id="login" name="login" type="text" [(ngModel)]="name" /></p>
        <p><label for="email">Email</label><input id="email" name="email" type="email" [(ngModel)]="email" /></p>
        <p><label for="psswd">Password</label><input id="psswd" name="psswd" type="password" [(ngModel)]="pwd" /></p>
        <p><label for="pwdConfirm">Confirm Password</label><input id="pwdConfirm" name="pwdConfirm" type="password" [(ngModel)]="pwdConfirm" /></p>
        <p><input type="radio" [(ngModel)]="role" name="role" value="admin">Admin</p>
        <p><input type="radio" [(ngModel)]="role" name="role" value="domainexpert">Domain Expert<br></p>
        <p><input type="radio" [(ngModel)]="role" name="role" value="planner">Planner</p>
        <br>
        <p><label for="firstname">Firstname</label><input id="firstname" name="firstname" type="text" [(ngModel)]="firstname" /></p>
        <p><label for="lastname">Lastname</label><input id="lastname" name="lastname" type="text" [(ngModel)]="lastname" /></p>
        <button (click)="onClick()">Submit</button>
      `
})
export class RegisterComponent implements OnInit {

    name:string;
    pwd:string;
    pwdConfirm:string;
    email:string;
    deleted:false;
    lastname:string;
    firstname:string;
    role:string;

    constructor(
        private _securitySvc: SecurityService
    ) {
    }

    ngOnInit() {

    }

    onClick() {
        let user:User = {
            username: this.name,
            password: this.pwd,
            email: this.email,
            roles: [this.role],
            firstname: this.firstname,
            lastname: this.lastname,
            deleted: false
        };
        this._securitySvc.userRegistration(user).then((res:string) => {
            console.log(res);
        })
    }
}