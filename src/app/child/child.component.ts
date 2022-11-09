import {
  Component,
  ChangeDetectionStrategy,
  Input,
  AfterViewChecked,
  OnInit,
} from '@angular/core';

export interface IA {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit, AfterViewChecked {
  @Input() values: IA[] = [];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewChecked(): void {
    console.log('--------START-----------------');
    for (let i = 0; i < this.values.length; i++) {
      const element = document.getElementById('v' + i);
      console.log(element);
    }
    console.log('--------END-----------------');
  }
}
