import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import tmi from 'tmi.js';
import randomColor from 'randomcolor';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  client: any;
  streamChannel: string;
  messages: any[] = [];

  constructor(private route: ActivatedRoute) {}

  getRandomColor(): string {
    return randomColor();
  }

  ngOnInit(): void {
    this.streamChannel = this.route.snapshot.paramMap.get('stream');

    this.client = new tmi.Client({
      connection: { reconnect: true },
      channels: [this.streamChannel],
    });

    this.client.connect();

    this.client.on('message', (channel, tags, message, self) => {
      this.messages.push({
        name: tags['display-name'],
        message,
        color: tags.color ?? this.getRandomColor(),
      });
    });
  }
}
