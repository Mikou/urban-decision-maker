import {Component} from '@angular/core';

@Component({
    selector: 'comment',
    template: `
      <h3>comment</h3>
      <label>name:</label>
      <input type="text" />
      <label>comment:</label>
      <textarea></textarea>
    `
})
export class CommentFeatureComponent {
    constructor() {
        console.log("Feature component loaded");
    }
}