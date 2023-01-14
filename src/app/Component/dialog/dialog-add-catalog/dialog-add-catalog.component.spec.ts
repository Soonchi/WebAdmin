import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddCatalogComponent } from './dialog-add-catalog.component';

describe('DialogAddCatalogComponent', () => {
  let component: DialogAddCatalogComponent;
  let fixture: ComponentFixture<DialogAddCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddCatalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
