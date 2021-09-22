import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button  mat-raised-button class="btn" [color]="color"> {{ label }}</button>`,
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input()
  color!: 'primary' | 'accent' | 'warn';
  @Input()
  label!: string;

  constructor() {}
}
