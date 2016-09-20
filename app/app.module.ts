import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component'

import { DecisionspaceModule } from './decisionspace/decisionspace.module'

import {routing} from './app.routing';


@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    HttpModule,
    DecisionspaceModule,
    routing
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}