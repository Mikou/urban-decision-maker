import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

import { LoginComponent } from './security/login.component';
import { RegisterComponent } from './security/register.component';
import { DecisionspacesComponent } from './decisionspace/decisionspaces.component';
import { DecisionspaceComponent } from './decisionspace/decisionspace.component';
import { CreateDecisionspaceComponent } from './decisionspace/createdecisionspace.component';
import { CanActivateTeam } from './canActivateTeam.service';

export const ROUTES: Routes = [
  { path: '',         component: HomeComponent },
  { path: 'home',     component: HomeComponent },
  { path: 'decisionspaces',    component: DecisionspacesComponent, canActivate: [CanActivateTeam] },
  { path: 'decisionspaces/:id',    component: DecisionspaceComponent },
  { path: 'create-decisionspace',    component: CreateDecisionspaceComponent },
  { path: 'login',    loadChildren:
    'security/login#SecurityModule'
  },
  { path: 'logout',    loadChildren:
    'security/logout#SecurityModule'
  },
  { path: 'register', component: RegisterComponent },
  { path: '**',    component: NoContentComponent },
];
