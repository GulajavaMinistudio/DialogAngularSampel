import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDialogSampelComponent } from './modal-dialog-sampel.component';

describe('ModalDialogSampelComponent', () => {
  let component: ModalDialogSampelComponent;
  let fixture: ComponentFixture<ModalDialogSampelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDialogSampelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDialogSampelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
