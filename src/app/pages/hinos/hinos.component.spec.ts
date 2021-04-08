import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HinosComponent } from './hinos.component';

describe('HinosComponent', () => {
  let component: HinosComponent;
  let fixture: ComponentFixture<HinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HinosComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
