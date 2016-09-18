import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DraggableModule } from '../../shared/draggable/draggable.module';
import { WidgetlistComponent } from './widgetlist.component';
import { WidgetlistitemComponent } from './widgetlistitem.component';
import { CommentFeatureComponent } from './featureComponents/comment.component';
import { VisualizationComponent } from './visualization.component';

/* Feature module */

@NgModule({
  imports: [ BrowserModule, DraggableModule ],
  declarations: [ 
    CommentFeatureComponent, 
    WidgetlistComponent, 
    WidgetlistitemComponent, 
    VisualizationComponent 
  ],
  entryComponents: [ CommentFeatureComponent, VisualizationComponent ],
  exports: [ WidgetlistComponent ]
})
export class WidgetModule {}