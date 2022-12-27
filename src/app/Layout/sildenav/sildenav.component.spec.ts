import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SildenavComponent } from './sildenav.component';

describe('SildenavComponent', () => {
  let component: SildenavComponent;
  let fixture: ComponentFixture<SildenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SildenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SildenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
