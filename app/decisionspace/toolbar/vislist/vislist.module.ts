import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DraggableModule } from '../../shared/draggable/draggable.module';
import { VislistComponent } from './vislist.component';
import { VislistitemComponent } from './vislistitem.component';
import { CreateVisCtrlComponent} from './createVisCtrl.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [ BrowserModule, DraggableModule, FormsModule],
  declarations: [ VislistComponent, VislistitemComponent, CreateVisCtrlComponent ],
  exports: [VislistComponent]
})
export class VislistModule {}