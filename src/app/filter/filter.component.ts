import { Component } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  formGroup!: FormGroup;

  filterFields = [
    { label: 'lot Id', value: 'lotId' },
    { label: 'Wafter Id', value: 'wafterId', type: 'select' },
    { label: 'Assignee', value: 'Assignee' },
    { label: 'Section Id', value: 'sectionId' },
  ];

  constructor(public controlContainer: ControlContainer) {}

  ngOnInit() {
    this.formGroup = this.controlContainer.control as FormGroup;
  }
}
