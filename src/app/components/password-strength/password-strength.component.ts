import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent {
  password: string = '';
  strength: number = 0;

  checkPasswordStrength() {
    if (this.password.length === 0) {
      this.strength = 0;
    } else if (this.password.length < 8) {
      this.strength = 1;
    } else {
      const hasLetters = /[a-zA-Z]/.test(this.password);
      const hasNumbers = /[0-9]/.test(this.password);
      const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);

      if (hasLetters && hasNumbers && hasSymbols) {
        this.strength = 3;
      } else if ((hasLetters && hasNumbers) || (hasLetters && hasSymbols) || (hasNumbers && hasSymbols)) {
        this.strength = 2;
      } else {
        this.strength = 1;
      }
    }
  }

  getStrengthClass(section: number): string {
    if (this.password.length === 0) {
      return 'grey';
    } else if (this.password.length < 8) {
      return 'red';
    } else if (this.strength === 1) {
      return section === 1 ? 'red' : 'grey';
    } else if (this.strength === 2) {
      return section <= 2 ? 'yellow' : 'grey';
    } else if (this.strength === 3) {
      return 'green';
    }
    return 'grey';
  }
}
