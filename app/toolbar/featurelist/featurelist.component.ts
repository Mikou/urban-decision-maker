import { Component } from '@angular/core';

@Component({
  selector: 'ud2d-featurelist',
  template: `
    <h3>{{title}}</h3>
    <ud2d-featurelistitem 
      *ngFor="let featureitem of featureitems" 
      [item]="featureitem"
    >
    </ud2d-featurelistitem>
  `
})

export class FeaturelistComponent {
  title = 'feature browser';

  featureitems = [
    {id:0, type:"featureItem", name:"comment", cptType:"comment", config:{

    }},
  ];
}