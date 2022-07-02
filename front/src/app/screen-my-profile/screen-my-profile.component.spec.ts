import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenMyProfileComponent } from './screen-my-profile.component';

describe('ScreenMyProfileComponent', () => {
  let component: ScreenMyProfileComponent;
  let fixture: ComponentFixture<ScreenMyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenMyProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenMyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
