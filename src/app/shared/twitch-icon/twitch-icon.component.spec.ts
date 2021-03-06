import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitchIconComponent } from './twitch-icon.component';

describe('TwitchIconComponent', () => {
  let component: TwitchIconComponent;
  let fixture: ComponentFixture<TwitchIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitchIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitchIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
