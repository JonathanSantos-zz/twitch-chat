import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [HomeComponent, ChatComponent],
  imports: [CommonModule, SharedModule],
  exports: [HomeComponent, ChatComponent],
})
export class ContainersModule {}
