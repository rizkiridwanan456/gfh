import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TPendudukPage } from './t-penduduk.page';

describe('TPendudukPage', () => {
  let component: TPendudukPage;
  let fixture: ComponentFixture<TPendudukPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(TPendudukPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
