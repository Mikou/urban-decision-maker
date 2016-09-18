import { Component, Input } from '@angular/core';

import { MakeDraggable } from '../../shared/draggable/make-draggable.directive';


@Component({
  selector: 'ud2d-vislistitem',
  template: `
    <p [makeDraggable]="item"><li>{{item.name}}</li></p>
  `
})

export class VislistitemComponent {
  @Input() item: string;
}