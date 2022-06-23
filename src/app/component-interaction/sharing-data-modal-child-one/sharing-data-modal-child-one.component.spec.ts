import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingDataModalChildOneComponent } from './sharing-data-modal-child-one.component';

describe('SharingDataModalChildOneComponent', () => {
  let component: SharingDataModalChildOneComponent;
  let fixture: ComponentFixture<SharingDataModalChildOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharingDataModalChildOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharingDataModalChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
