import { FormatWidth } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  filterFields = [
    { label: 'lot Id', value: 'lotId' },
    { label: 'Wafter Id', value: 'wafterId', type: 'select' },
    { label: 'Assignee', value: 'Assignee' },
    { label: 'Section Id', value: 'sectionId' },
  ];

  get filtersGroup() {
    return this.formData.get('filters') as FormArray;
  }

  dynamicFields(idx: number) {
    return this.filtersGroup.at(idx).get('dynamicFields') as FormArray;
  }

  formData = this.fb.group({
    filters: this.fb.array([]),
  });

  constructor(private fb: FormBuilder) {}

  addFilter() {
    this.filtersGroup.push(this.newFilter());
  }

  newFilter() {
    return this.fb.group({
      caseType: '',
      dynamicFields: this.fb.array([]),
    });
  }

  addField(idx: number) {
    this.dynamicFields(idx).push(this.newField());
  }

  newField() {
    const fieldName = new FormControl();

    fieldName.valueChanges.subscribe({
      next: () => {
        (fieldName.parent as FormGroup)?.patchValue(
          { fieldValue: '' },
          { emitEvent: false }
        );
      },
    });
    return this.fb.group({
      fieldName,
      fieldValue: '',
    });
  }

  removeFilter(idx: number, e: any) {
    e.stopPropagation();
    this.filtersGroup.removeAt(idx);
  }

  removeField(fields: FormArray, fieldIdx: number, e: any) {
    e.preventDefault();
    fields.removeAt(fieldIdx);
  }
}
