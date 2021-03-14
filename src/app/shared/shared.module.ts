import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { TextsModule } from './texts/texts.module';
import { FormsModule } from '@angular/forms';
import { TwitchIconComponent } from './twitch-icon/twitch-icon.component';

@NgModule({
  declarations: [ButtonComponent, InputComponent, TwitchIconComponent],
  imports: [CommonModule, FormsModule, TextsModule],
  exports: [ButtonComponent, InputComponent, TwitchIconComponent, TextsModule],
})
export class SharedModule {}
