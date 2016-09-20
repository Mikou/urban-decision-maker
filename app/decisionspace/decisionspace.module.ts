import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { DecisionspaceComponent } from './decisionspace.component';
import { DecisionspacesComponent } from './decisionspaces.component';
import { ToolbarModule } from './toolbar/toolbar.module';
import { CanvasModule } from './canvas/canvas.module';


@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    ToolbarModule,
    CanvasModule,
    
  ],
  declarations: [ DecisionspaceComponent, DecisionspacesComponent ],
  exports: [ DecisionspacesComponent ]
})
export class DecisionspaceModule {}