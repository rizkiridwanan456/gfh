import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EUangkeluarPage } from './e-uangkeluar.page';

describe('EUangkeluarPage', () => {
  let component: EUangkeluarPage;
  let fixture: ComponentFixture<EUangkeluarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EUangkeluarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
