import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DraggableModule } from '../../shared/draggable/draggable.module';
import { VislistComponent } from './vislist.component';
import { VislistitemComponent } from './vislistitem.component';

@NgModule({
  imports: [ BrowserModule, DraggableModule ],
  declarations: [ VislistComponent, VislistitemComponent ],
  exports: [VislistComponent]
})
export class VislistModule {}