import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NotificationModule }   from '../notification/notification.module';
import { ConnectionService } from './connection.service';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    NotificationModule
  ],
  providers: [ ConnectionService ],
  exports: [  ]
})
export class SocketFactoryModule {}