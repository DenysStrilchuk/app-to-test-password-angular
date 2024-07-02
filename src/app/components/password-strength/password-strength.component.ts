import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { PasswordStrengthService } from '../../services/password-strength.service';
import { PasswordInputComponent } from './password-input.component';
import { PasswordStrengthDisplayComponent } from './password-strength-display.component';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PasswordInputComponent, PasswordStrengthDisplayComponent],
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private passwordStrengthService: PasswordStrengthService) {
    this.form = this.fb.group({
      password: ['']
    });

    this.form.get('password')?.valueChanges.subscribe(value => {
      this.checkPasswordStrength(value);
    });
  }

  checkPasswordStrength(password: string) {
    const strength = this.passwordStrengthService.calculateStrength(password);
    this.form.get('password')?.setValue(password, { emitEvent: false });
    this.form.get('strength')?.setValue(strength, { emitEvent: false });
  }
}
