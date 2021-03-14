import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryTextComponent } from './primary-text.component';

describe('PrimaryTextComponent', () => {
  let component: PrimaryTextComponent;
  let fixture: ComponentFixture<PrimaryTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
