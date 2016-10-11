import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { SecurityComponent } from './security.component';
import { SecurityService } from './security.service';
import { SocketFactoryModule } from '../socketFactory/socketFactory.module'


@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    SocketFactoryModule
  ],
  providers: [ SecurityService ],
  declarations: [ SecurityComponent ],
  exports: [ SecurityComponent ]
})
export class SecurityModule {}