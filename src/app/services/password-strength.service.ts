import { Injectable } from '@angular/core';
import { REGEX_LETTERS, REGEX_NUMBERS, REGEX_SYMBOLS } from '../constants/regex.constants';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {
  private readonly minPasswordLength = 8;

  checkStrength(password: string): number {
    if (password.length === 0) {
      return 0;
    } else if (password.length < this.minPasswordLength) {
      return 1;
    } else {
      const hasLetters = REGEX_LETTERS.test(password);
      const hasNumbers = REGEX_NUMBERS.test(password);
      const hasSymbols = REGEX_SYMBOLS.test(password);

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
