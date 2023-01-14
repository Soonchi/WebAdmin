import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpateCatalogComponent } from './dialog-upate-catalog.component';

describe('DialogUpateCatalogComponent', () => {
  let component: DialogUpateCatalogComponent;
  let fixture: ComponentFixture<DialogUpateCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpateCatalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogUpateCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
