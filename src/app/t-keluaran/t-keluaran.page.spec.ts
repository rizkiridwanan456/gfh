import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TKeluaranPage } from './t-keluaran.page';

describe('TKeluaranPage', () => {
  let component: TKeluaranPage;
  let fixture: ComponentFixture<TKeluaranPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TKeluaranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
