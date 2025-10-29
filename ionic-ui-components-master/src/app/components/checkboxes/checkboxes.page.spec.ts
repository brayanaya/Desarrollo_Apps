import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckboxesPage } from './checkboxes.page';

describe('CheckboxesPage', () => {
  let component: CheckboxesPage;
  let fixture: ComponentFixture<CheckboxesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
