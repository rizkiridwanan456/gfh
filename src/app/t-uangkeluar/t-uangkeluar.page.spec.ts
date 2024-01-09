import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TUangkeluarPage } from './t-uangkeluar.page';

describe('TUangkeluarPage', () => {
  let component: TUangkeluarPage;
  let fixture: ComponentFixture<TUangkeluarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TUangkeluarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
