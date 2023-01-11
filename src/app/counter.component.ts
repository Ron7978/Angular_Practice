import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'counter',
  template: `
    <div>
      {{name}}
      <button (click)="dec()">-</button>
      {{val}}
      <button (click)="inc()">+</button>
    </div>
  `,
  styles: [`h1 { font-family: Lato; }`],
})
export class CounterComponent {
  @Input() name: string;
  @Input() val: number;
  @Output() change = new EventEmitter<number>();

  inc() {
    this.change.emit(this.val + 1);
  }

  dec() {
    this.change.emit(this.val - 1 < 0 ? 0 : this.val - 1);
  }
}
