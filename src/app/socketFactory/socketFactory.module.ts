import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { ConnectionService } from './connection.service';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule
  ],
  providers: [ ConnectionService ],
  exports: [  ]
})
export class SocketFactoryModule {}