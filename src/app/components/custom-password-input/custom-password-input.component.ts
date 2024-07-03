import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-password-input',
  templateUrl: './custom-password-input.component.html',
  styleUrls: ['./custom-password-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomPasswordInputComponent),
      multi: true
    }
  ],
  standalone: true,
  imports: [CommonModule]
})
export class CustomPasswordInputComponent implements ControlValueAccessor {
  password: string = '';

  private onChange: (value: any) => void = () => {};

  writeValue(value: string | null): void {
    this.password = value || '';
    this.onChange(this.password);
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {}

  setDisabledState?(isDisabled: boolean): void {}

  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.password = inputElement.value;
    this.onChange(this.password);
  }
}
