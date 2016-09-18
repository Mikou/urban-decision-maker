// Module structure example: http://plnkr.co/edit/?p=preview
// https://angular.io/docs/ts/latest/guide/ngmodule.html

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DraggableModule } from '../../shared/draggable/draggable.module';

/* APP root */
import { FeaturelistComponent } from './featurelist.component';
import { FeaturelistitemComponent } from './featurelistitem.component';

/* Feature module */

@NgModule({
  imports: [ BrowserModule, DraggableModule ],
  declarations: [ FeaturelistComponent, FeaturelistitemComponent ],
  exports: [FeaturelistComponent]
})
export class FeaturelistModule {}