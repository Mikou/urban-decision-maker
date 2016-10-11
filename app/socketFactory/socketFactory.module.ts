import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { SocketFactoryService } from './socketFactory.service';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule
  ],
  providers: [ SocketFactoryService ],
  exports: [  ]
})
export class SocketFactoryModule {}