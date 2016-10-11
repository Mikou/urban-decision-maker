import { Injectable } from '@angular/core';
import { USERS, ROLES }      from './mock';
import { User }         from './user.model';
import { Role }         from './role.model';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject }      from 'rxjs/BehaviorSubject';
import { SocketFactoryService } from '../socketFactory/socketFactory.service'
import { Subject } from 'rxjs/Subject';

//http://stackoverflow.com/questions/33675155/creating-and-returning-observable-from-angular-2-service

export interface Message {
    author: string;
    message: string;
}


@Injectable()
export class SecurityService {
    public messages: Subject<Message>;

    constructor(
        private socketFactoryService:SocketFactoryService
    ) {
    }

    _selectedUser:BehaviorSubject<User> = new BehaviorSubject<User>(null);
    selectedUser$ = this._selectedUser.asObservable();

    getUsers(): Promise<User[]> {
        return Promise.resolve(USERS);
    }

    getRoles(): Promise<Role[]> {
        return Promise.resolve(ROLES);
    }

    setAuthentication(user:User) {
        this._selectedUser.next(user);
    }
}