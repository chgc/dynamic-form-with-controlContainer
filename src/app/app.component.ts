import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  get filtersGroup() {
    return this.formData.get('filters') as FormArray;
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

  removeFilter(idx: number, e: any) {
    e.stopPropagation();
    this.filtersGroup.removeAt(idx);
  }
}
