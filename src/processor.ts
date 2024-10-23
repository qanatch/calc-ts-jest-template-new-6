import { User } from './user'

export class Processor {
  givenConsent(user: User): void {
    user.consentGiven = true
  }

  checkConsent(user: User): boolean {
    return user.consentGiven === true
  }

  checkAge(user: User, age: number): void {
    if (age >= 18) {
      user.consentGiven = true
    } else {
      user.consentGiven = false
    }
  }
  revokeConsent(user: User): void {
    user.consentGiven = false
  }
}
