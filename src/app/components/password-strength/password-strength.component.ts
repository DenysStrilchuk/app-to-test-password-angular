import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordStrengthService } from '../../services/password-strength.service';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class PasswordStrengthComponent implements OnChanges {
  @Input() password: string = '';
  strength: number = 0;

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  ngOnChanges(): void {
    this.strength = this.passwordStrengthService.checkStrength(this.password);
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
