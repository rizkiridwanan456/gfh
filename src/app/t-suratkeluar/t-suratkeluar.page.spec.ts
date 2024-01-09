import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TSuratkeluarPage } from './t-suratkeluar.page';

describe('TSuratkeluarPage', () => {
  let component: TSuratkeluarPage;
  let fixture: ComponentFixture<TSuratkeluarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TSuratkeluarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
