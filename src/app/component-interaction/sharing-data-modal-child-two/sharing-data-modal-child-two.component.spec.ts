import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingDataModalChildTwoComponent } from './sharing-data-modal-child-two.component';

describe('SharingDataModalChildTwoComponent', () => {
  let component: SharingDataModalChildTwoComponent;
  let fixture: ComponentFixture<SharingDataModalChildTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharingDataModalChildTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharingDataModalChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
