import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTapDatGheComponent } from './bai-tap-dat-ghe.component';

describe('BaiTapDatGheComponent', () => {
  let component: BaiTapDatGheComponent;
  let fixture: ComponentFixture<BaiTapDatGheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTapDatGheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTapDatGheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
