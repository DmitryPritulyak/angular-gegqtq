import { Component } from '@angular/core';
import { IA } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  values: IA[] = [];
  index: number = 0;

  onAdd() {
    const index = this.index++;
    this.values = [
      ...this.values,
      {
        id: index,
        name: `name${index}`,
        description: `description${index}`,
      },
    ];
    console.log(this.values);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
