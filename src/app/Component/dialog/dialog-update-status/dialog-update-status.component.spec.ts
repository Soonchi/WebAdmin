import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateStatusComponent } from './dialog-update-status.component';

describe('DialogUpdateStatusComponent', () => {
  let component: DialogUpdateStatusComponent;
  let fixture: ComponentFixture<DialogUpdateStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdateStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogUpdateStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
