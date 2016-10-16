import{ Component, OnInit, Input } from '@angular/core';
import{ SecurityService } from './security.service';
import { CandidateUser } from './candidateUser.model';
import { User } from './user.model';

@Component({
    selector: 'ud2d-login',
    template: `
        <h2>user login</h2>
        <p><label for="login">Name</label><input id="login" name="login" type="text" [(ngModel)]="name" /></p>
        <p><label for="psswd">Password</label><input id="psswd" name="psswd" type="password" [(ngModel)]="pwd" /></p>
        <button (click)="onClick()">Submit</button>
      `
})
export class LoginComponent implements OnInit {

    name:string;
    pwd:string;

    constructor(
        private _securitySvc: SecurityService
    ) {
    }

    ngOnInit() {

    }

    onClick() {
        let candidateUser:CandidateUser = {
            username: this.name,
            password: this.pwd
        };
        this._securitySvc.userLogin(candidateUser).then((user:User) => {
            this._securitySvc.setAuthentication(user)
        });
    }
}