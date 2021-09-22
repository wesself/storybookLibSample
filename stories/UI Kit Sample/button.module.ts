import { NgModule } from '@angular/core';
import { ButtonComponent } from './button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
  imports: [MatButtonModule, MatIconModule]
})
export class ButtonModule { }
