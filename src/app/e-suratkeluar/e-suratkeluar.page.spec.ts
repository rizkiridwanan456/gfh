import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ESuratkeluarPage } from './e-suratkeluar.page';

describe('ESuratkeluarPage', () => {
  let component: ESuratkeluarPage;
  let fixture: ComponentFixture<ESuratkeluarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ESuratkeluarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
