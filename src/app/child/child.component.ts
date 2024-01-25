import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  exportAs: 'app-child'
})
export class ChildComponent {
    childValue: string = 'This is value from inside the ChildComponent Class.';
}
