import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingDataModalParentComponent } from './sharing-data-modal-parent.component';

describe('SharingDataModalParentComponent', () => {
  let component: SharingDataModalParentComponent;
  let fixture: ComponentFixture<SharingDataModalParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharingDataModalParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharingDataModalParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
