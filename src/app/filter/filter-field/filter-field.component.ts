import { Component, Input, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormArray,
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-filter-field',
  templateUrl: './filter-field.component.html',
  styleUrls: ['./filter-field.component.scss'],
})
export class FilterFieldComponent implements OnInit {
  @Input() dynamicFieldsValue: any;
  @Input() filterFields: any[] = [];

  formData!: FormArray;
  fieldIdx!: number;

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit() {
    this.formData = this.controlContainer.control as FormArray;
  }

  newField() {
    const fieldName = new FormControl();
    const fieldValue = new FormControl();

    fieldName.valueChanges.subscribe({
      next: () => {
        (fieldName.parent as FormGroup)?.patchValue(
          { fieldValue: '' },
          { emitEvent: false }
        );
      },
    });
    return new FormGroup({
      fieldName,
      fieldValue,
    });
  }

  addField() {
    this.formData.push(this.newField());
  }

  removeField(fieldIdx: number) {
    this.formData.removeAt(fieldIdx);
  }
}
