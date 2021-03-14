import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  value: string = '';

  constructor(private router: Router) {}

  goToChat(value: string) {
    this.router.navigateByUrl(`/chat/${value}`);
  }

  isDisabled() {
    return this.value.length === 0;
  }

  ngOnInit(): void {}
}
