import {User} from './user.model';
import {Role} from './role.model';

export const USERS:User[] = [
    {name: "bart", role:"anonymous"},
    {name: "lisa", role:"admin"},
    {name: "maggy", role:"planner"}
];

export const ROLES:Role[] = [
    {name: "super user", id:0},
    {name: "admin", id:1},
    {name: "planner", id:2}
];
