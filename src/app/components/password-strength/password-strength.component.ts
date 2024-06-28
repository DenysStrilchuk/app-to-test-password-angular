import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './password-strength.component.html',
  styleUrl: './password-strength.component.css'
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
      let hasLetters = /[a-zA-Z]/.test(this.password);
      let hasNumbers = /[0-9]/.test(this.password);
      let hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);

      if (hasLetters && hasNumbers && hasSymbols) {
        this.strength = 3;
      } else if ((hasLetters && hasNumbers) || (hasLetters && hasSymbols) || (hasNumbers && hasSymbols)) {
        this.strength = 2;
      } else {
        this.strength = 1;
      }
    }
    console.log(`Password: ${this.password}, Strength: ${this.strength}`);
  }

  getStrengthClass(section: number): string {
    let strengthClass = '';
    if (this.strength === 0) {
      strengthClass = 'grey';
    } else if (this.strength === 1) {
      strengthClass = section === 1 ? 'red' : 'grey';
    } else if (this.strength === 2) {
      strengthClass = section <= 2 ? 'yellow' : 'grey';
    } else if (this.strength === 3) {
      strengthClass = 'green';
    }
    console.log(`Section ${section} class: ${strengthClass}`);
    return strengthClass;
  }
}
