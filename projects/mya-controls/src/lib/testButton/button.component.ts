import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mya-test-button',
  template: `
    <button  mat-raised-button class="btn"> {{ label }}</button>`,
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestButtonComponent {
  @Input() public label!: string;

  constructor() {}
}
