import {User} from './user.model';
import {Role} from './role.model';

export const USERS:User[] = [
    {username: "bart", roles:["anonymous"], firstname:"bart", lastname:"simpson", password:"s3cr3t", email:"bart@udm.dk", deleted:false},
    {username: "lisa", roles:["admin"], firstname:"lisa", lastname:"simpson", password:"s3cr3t", email:"lisa@udm.dk", deleted:false},
    {username: "maggy", roles:["planner"], firstname:"maggy", lastname:"simpson", password:"s3cr3t", email:"maggy@udm.dk", deleted:false},
];