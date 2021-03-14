import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-twitch-icon',
  templateUrl: './twitch-icon.component.svg',
})
export class TwitchIconComponent implements OnInit {
  @Input() width: string = '10vw';
  @Input() height: string = '100%';
  @Input() fillColor: string = '#fff';

  constructor() {}

  ngOnInit(): void {}
}
