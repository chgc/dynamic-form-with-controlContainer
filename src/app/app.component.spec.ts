import { compileClassMetadata } from '@angular/compiler';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new filter', () => {
    component.addFilter();
    expect(component.filtersGroup.length).toBe(1);
    expect(component.formData.value).toEqual({
      filters: [{ caseType: '', dynamicFields: [] }],
    });
  });

  it('should removeFilter', () => {
    component.addFilter();
    component.removeFilter(0, { stopPropagation: () => {} });
    expect(component.filtersGroup.length).toBe(0);
  });
});
