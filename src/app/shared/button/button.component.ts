import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() value: string;
  @Output() onClick = new EventEmitter<void>();

  @Input() disabled: boolean = false;

  constructor() {}

  handleOnClick() {
    this.onClick.emit();
  }

  ngOnInit(): void {}
}
