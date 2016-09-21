import { Injectable } from '@angular/core';
import { USERS }      from './mock-users';
import {User}         from './user.model';
import { Observable } from 'rxjs/Observable';
import {BehaviorSubject}      from 'rxjs/BehaviorSubject';

//http://stackoverflow.com/questions/33675155/creating-and-returning-observable-from-angular-2-service

@Injectable()
export class SecurityService {

    _selectedUser:BehaviorSubject<User> = new BehaviorSubject<User>();
    selectedUser$ = this._selectedUser.asObservable();


    getUsers(): Promise<User[]> {
        return Promise.resolve(USERS);
    }

    setAuthentication(user:User) {
        this._selectedUser.next(user);
    }
}