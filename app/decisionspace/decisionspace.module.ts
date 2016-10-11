import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { DecisionspaceComponent } from './decisionspace.component';
import { DecisionspacesComponent } from './decisionspaces.component';
import { ToolbarModule } from './toolbar/toolbar.module';
import { CanvasModule } from './canvas/canvas.module';
import { DecisionspaceService } from './decisionspace.service';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    ToolbarModule,
    CanvasModule,
    
  ],
  providers: [ DecisionspaceService ],
  declarations: [ DecisionspaceComponent, DecisionspacesComponent ],
  exports: [ DecisionspacesComponent ]
})
export class DecisionspaceModule {}