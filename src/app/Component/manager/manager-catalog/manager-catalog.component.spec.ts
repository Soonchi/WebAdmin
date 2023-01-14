import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerCatalogComponent } from './manager-catalog.component';

describe('ManagerCatalogComponent', () => {
  let component: ManagerCatalogComponent;
  let fixture: ComponentFixture<ManagerCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerCatalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
