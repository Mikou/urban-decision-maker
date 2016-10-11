import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DecisionspacesComponent } from './decisionspace/decisionspaces.component';
import { DecisionspaceComponent } from './decisionspace/decisionspace.component';
import { ProfilesComponent } from './profile/profiles.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DecisionspacesComponent
  },
  {
    path: 'decisionspaces',
    component: DecisionspacesComponent,
  },
    {
    path: 'decisionspaces/:id',
    component: DecisionspaceComponent
  },
  {
    path: 'people',
    component: ProfilesComponent,
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);