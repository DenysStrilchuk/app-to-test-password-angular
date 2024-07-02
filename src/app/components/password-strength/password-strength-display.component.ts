import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-strength-display',
  template: `
    <div class="strength-bars">
      <div [ngClass]="getStrengthClass(1)"></div>
      <div [ngClass]="getStrengthClass(2)"></div>
      <div [ngClass]="getStrengthClass(3)"></div>
    </div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class PasswordStrengthDisplayComponent {
  @Input() strength: number = 0;

  getStrengthClass(section: number): string {
    if (this.strength === 0) {
      return 'grey';
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
