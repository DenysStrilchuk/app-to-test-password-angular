import { Injectable } from '@angular/core';
import { REGEX } from '../regex';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  calculateStrength(password: string): number {
    if (password.length === 0) {
      return 0;
    } else if (password.length < 8) {
      return 1;
    } else {
      const hasLetters = REGEX.hasLetters.test(password);
      const hasNumbers = REGEX.hasNumbers.test(password);
      const hasSymbols = REGEX.hasSymbols.test(password);

      if (hasLetters && hasNumbers && hasSymbols) {
        return 3;
      } else if ((hasLetters && hasNumbers) || (hasLetters && hasSymbols) || (hasNumbers && hasSymbols)) {
        return 2;
      } else {
        return 1;
      }
    }
  }
}
