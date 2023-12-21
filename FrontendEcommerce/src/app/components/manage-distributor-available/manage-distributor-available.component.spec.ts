import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDistributorAvailableComponent } from './manage-distributor-available.component';

describe('ManageDistributorAvailableComponent', () => {
  let component: ManageDistributorAvailableComponent;
  let fixture: ComponentFixture<ManageDistributorAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageDistributorAvailableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageDistributorAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
