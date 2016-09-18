// Module structure example: http://plnkr.co/edit/?p=preview
// https://angular.io/docs/ts/latest/guide/ngmodule.html

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';

/* APP root */
import { AppComponent } from './app.component';
import { ToolbarModule } from './toolbar/toolbar.module';
import { CanvasModule } from './canvas/canvas.module';


/* Feature module */

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    ToolbarModule,
    CanvasModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}