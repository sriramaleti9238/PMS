import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpatientinfoComponent } from './viewpatientinfo.component';

describe('ViewpatientinfoComponent', () => {
  let component: ViewpatientinfoComponent;
  let fixture: ComponentFixture<ViewpatientinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpatientinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewpatientinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
