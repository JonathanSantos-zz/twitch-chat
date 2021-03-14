import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryTextComponent } from './primary-text/primary-text.component';

@NgModule({
  declarations: [PrimaryTextComponent],
  imports: [CommonModule],
  exports: [PrimaryTextComponent],
})
export class TextsModule {}
