import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CustomPasswordInputComponent } from './components/custom-password-input/custom-password-input.component';
import { PasswordStrengthComponent } from './components/password-strength/password-strength.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomPasswordInputComponent,
    PasswordStrengthComponent
  ],
  standalone: true
})
export class AppComponent {
  form = new FormGroup({
    password: new FormControl<string | null>(null)
  });

  get passwordControl() {
    return this.form.get('password')!;
  }
}
