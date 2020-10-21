import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlrtPickerComponent } from './alrt-picker.component';

describe('AlrtPickerComponent', () => {
  let component: AlrtPickerComponent;
  let fixture: ComponentFixture<AlrtPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlrtPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlrtPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
