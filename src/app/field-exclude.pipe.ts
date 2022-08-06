import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fieldExclude',
})
export class FieldExcludePipe implements PipeTransform {
  transform(value: any[], controls: any[], currentIdx: number): any[] {
    const selectedFields = controls
      .filter((x, idx) => x.fieldName != null && idx !== currentIdx)
      .map((x) => x.fieldName.value);
    return value.filter((x) => !selectedFields.includes(x.value));
  }
}
