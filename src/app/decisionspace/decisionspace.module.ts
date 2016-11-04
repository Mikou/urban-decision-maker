import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { DecisionspaceComponent } from './decisionspace.component';
import { CreateDecisionspaceComponent } from './createdecisionspace.component';
import { DecisionspacesComponent } from './decisionspaces.component';
import { ToolbarModule } from './toolbar/toolbar.module';
import { CanvasModule } from './canvas/canvas.module';
import { DecisionspaceService } from './decisionspace.service';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    ToolbarModule,
    CanvasModule,
    MaterialModule.forRoot()
  ],
  providers: [ DecisionspaceService ],
  declarations: [ DecisionspaceComponent, CreateDecisionspaceComponent, DecisionspacesComponent ],
  exports: [ DecisionspacesComponent ]
})
export class DecisionspaceModule {}