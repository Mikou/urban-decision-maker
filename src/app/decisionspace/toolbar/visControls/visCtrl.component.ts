import { Component, Input } from '@angular/core';

import { MakeDraggable } from '../../shared/draggable/make-draggable.directive';


@Component({
<<<<<<< HEAD:src/app/decisionspace/toolbar/visControls/visCtrl.component.ts
  selector: 'udm-visctrl',
=======
  selector: 'ud2d-visctrl',
>>>>>>> fdbe35102fad73310ae0e9ce741a03ef926e09e5:src/app/decisionspace/toolbar/visControls/visCtrl.component.ts
  template: `
    <p [makeDraggable]="item"><li>{{item.name}}</li></p>
  `
})

export class VisCtrlComponent {
  @Input() item: string;
}