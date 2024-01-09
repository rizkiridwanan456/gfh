import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KeluaranPage } from './keluaran.page';

describe('KeluaranPage', () => {
  let component: KeluaranPage;
  let fixture: ComponentFixture<KeluaranPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KeluaranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
