import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenLeadsComponent } from './screen-leads.component';

describe('ScreenLeadsComponent', () => {
  let component: ScreenLeadsComponent;
  let fixture: ComponentFixture<ScreenLeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenLeadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
