import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDistributorAvailableDialogeComponent } from './manage-distributor-available-dialoge.component';

describe('ManageDistributorAvailableDialogeComponent', () => {
  let component: ManageDistributorAvailableDialogeComponent;
  let fixture: ComponentFixture<ManageDistributorAvailableDialogeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageDistributorAvailableDialogeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageDistributorAvailableDialogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
