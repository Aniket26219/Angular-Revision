import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlrtMainComponent } from './alrt-main.component';

describe('AlrtMainComponent', () => {
  let component: AlrtMainComponent;
  let fixture: ComponentFixture<AlrtMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlrtMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlrtMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
