import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-primary-text',
  templateUrl: './primary-text.component.html',
  styleUrls: ['./primary-text.component.scss'],
})
export class PrimaryTextComponent implements OnInit {
  @Input() value: string;

  constructor() {}

  ngOnInit(): void {}
}
