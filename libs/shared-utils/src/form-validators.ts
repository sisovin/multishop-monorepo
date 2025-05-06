import { AbstractControl, ValidationErrors } from '@angular/forms';

export class FormValidators {
  static required(control: AbstractControl): ValidationErrors | null {
    return control.value ? null : { required: true };
  }

  static minLength(minLength: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value && control.value.length >= minLength
        ? null
        : { minLength: { requiredLength: minLength, actualLength: control.value.length } };
    };
  }

  static maxLength(maxLength: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value && control.value.length <= maxLength
        ? null
        : { maxLength: { requiredLength: maxLength, actualLength: control.value.length } };
    };
  }

  static pattern(pattern: RegExp) {
    return (control: AbstractControl): ValidationErrors | null => {
      return pattern.test(control.value)
        ? null
        : { pattern: { requiredPattern: pattern.toString(), actualValue: control.value } };
    };
  }

  static email(control: AbstractControl): ValidationErrors | null {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(control.value)
      ? null
      : { email: { requiredPattern: emailPattern.toString(), actualValue: control.value } };
  }

  static match(controlName: string, matchingControlName: string) {
    return (control: AbstractControl): ValidationErrors | null => {
      const formGroup = control.parent;
      if (!formGroup) {
        return null;
      }

      const controlToMatch = formGroup.get(controlName);
      const matchingControl = formGroup.get(matchingControlName);

      if (!controlToMatch || !matchingControl) {
        return null;
      }

      return controlToMatch.value === matchingControl.value
        ? null
        : { match: { controlName, matchingControlName } };
    };
  }
}
