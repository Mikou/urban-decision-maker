import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { SocketFactoryService } from './socketFactory.service';
import { ConnectionService } from './connection.service';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule
  ],
  providers: [ SocketFactoryService, ConnectionService ],
  exports: [  ]
})
export class SocketFactoryModule {}