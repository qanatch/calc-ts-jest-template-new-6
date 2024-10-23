import { User } from './user'

export class Processor {
  givenConsent(user: User): void {
    user.consentGiven = true
  }

  checkConsent(user: User): boolean {
    return user.consentGiven === true
  }
}
