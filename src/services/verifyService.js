import { NUMBER_OF_DIGITS_ACCEPTED, RESTRICTED_LAST_DIGIT } from '../validators/codeValidator';
/**
 * Verify the given code.
 *
 * @param   {Object}  code
 * @returns {Object}  result
 */
export function verify(code) {
  const lastDigit = code % 10;
  const numberOfDigits = code.toString().length;

  if (lastDigit !== RESTRICTED_LAST_DIGIT && numberOfDigits === NUMBER_OF_DIGITS_ACCEPTED) {
    return { isValid: true, message: 'Verification Success' };
  }

  return { isValid: false, message: 'Verification Error' };
}
