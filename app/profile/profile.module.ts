import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { ProfilesComponent } from './profiles.component'
import { SecurityModule } from '../security/security.module'


@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    SecurityModule
  ],
  providers: [],
  declarations: [ ProfilesComponent ],
  exports: [ ProfilesComponent ]
})
export class ProfileModule {}