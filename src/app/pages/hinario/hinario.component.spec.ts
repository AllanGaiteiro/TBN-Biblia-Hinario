import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HinarioComponent } from './hinario.component';

describe('HinarioComponent', () => {
  let component: HinarioComponent;
  let fixture: ComponentFixture<HinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HinarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
