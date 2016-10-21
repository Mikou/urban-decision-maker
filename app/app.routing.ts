import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DecisionspacesComponent } from './decisionspace/decisionspaces.component';
import { CreateDecisionspaceComponent } from './decisionspace/createdecisionspace.component';
import { DecisionspaceComponent } from './decisionspace/decisionspace.component';
import { ProfilesComponent } from './profile/profiles.component';
import { LoginComponent } from './security/login.component';
import { RegisterComponent } from './security/register.component';
import { HomeComponent } from './home.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'decisionspaces',
    component: DecisionspacesComponent,
  },
  {
    path: 'create-decisionspace',
    component: CreateDecisionspaceComponent,
  },
  {
    path: 'decisionspaces/:id',
    component: DecisionspaceComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'people',
    component: ProfilesComponent,
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);