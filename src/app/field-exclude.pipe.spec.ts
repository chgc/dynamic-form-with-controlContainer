import { FieldExcludePipe } from './field-exclude.pipe';

<<<<<<< HEAD
describe('FieldExcludePipe', () => {
=======
fdescribe('FieldExcludePipe', () => {
>>>>>>> 230b490... add spec test
  let pipe: FieldExcludePipe;

  beforeEach(() => {
    pipe = new FieldExcludePipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should fiter choicen item', () => {
    const result = pipe.transform(
      [{ value: 1 }, { value: 2 }, { value: 3 }],
      [{ fieldName: null }, { fieldName: { value: 1 } }],
      0
    );
    expect(result.length).toBe(2);
  });
});
