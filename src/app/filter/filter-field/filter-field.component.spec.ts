import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ControlContainer,
  FormArray,
  FormArrayName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { FilterFieldComponent } from './filter-field.component';

describe('FilterFieldComponent', () => {
  let component: FilterFieldComponent;
  let fixture: ComponentFixture<FilterFieldComponent>;
  let formModel: FormArray;
  let formArrayDir: FormArrayName;

  beforeEach(async () => {
    const parent = new FormGroupDirective([], []);
    formModel = new FormArray([]);
    parent.form = new FormGroup({ dynamicFields: formModel });
    formArrayDir = new FormArrayName(parent, [], []);
    formArrayDir.name = 'dynamicFields';

    await TestBed.configureTestingModule({
      declarations: [FilterFieldComponent],
      imports: [ReactiveFormsModule],
      providers: [{ provide: ControlContainer, useValue: formArrayDir }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add field', () => {
    component.addField();
    expect(component.formData.controls.length).toBe(1);
  });

  it('should remove field', () => {
    component.addField();
    component.removeField(0);
    expect(component.formData.controls.length).toBe(0);
  });

  it('should have one field with fileName & value', () => {
    const group = component.newField();
    expect(group.value).toEqual({
      fieldName: null,
      fieldValue: null,
    });
  });

  it('should clear fielValue with change', () => {
    const group = component.newField();
    group.patchValue({ fieldValue: '123' });
    group.patchValue({ fieldName: 'test' });
    expect(group.value.fieldValue).toBe('');
  });
});
