import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './child.html',

})
export class Child implements OnInit, OnChanges {

  @Input() value!: string;

  constructor() {
    console.log('Constructor called');
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log('Initial value:', this.value);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');

    if (changes['value']) {
      const previous = changes['value'].previousValue;
      const current = changes['value'].currentValue;

      console.log('Previous value:', previous);
      console.log('Current value:', current);
      console.log('First change:', changes['value'].firstChange);
    }
  }
}
