import { NgModule } from '@angular/core';
import { TestButtonComponent } from './button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [TestButtonComponent],
  exports: [TestButtonComponent],
  imports: [MatButtonModule, MatIconModule]
})
export class TestButtonModule { }
