import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingBasicComponent } from './databinding-basic.component';

describe('DatabindingBasicComponent', () => {
  let component: DatabindingBasicComponent;
  let fixture: ComponentFixture<DatabindingBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabindingBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabindingBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
