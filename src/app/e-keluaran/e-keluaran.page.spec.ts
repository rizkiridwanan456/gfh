import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EKeluaranPage } from './e-keluaran.page';

describe('EKeluaranPage', () => {
  let component: EKeluaranPage;
  let fixture: ComponentFixture<EKeluaranPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EKeluaranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
