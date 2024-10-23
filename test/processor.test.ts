import { User } from '../src/user'
import { Processor } from '../src/processor'

let user: User
let processor: Processor

beforeEach((): void => {
  user = new User('Alice', 'Ott', '147852', 'test')
  processor = new Processor()
})

test('check new user undefined', () => {
  //const user = new User('Alex', 'Shmidt', '147852', 'test')
  expect(user.consentGiven).toBeUndefined()
})

test('check Processor approve', () => {
  processor.givenConsent(user)
  expect(user.consentGiven).toBe(true)
})

test('check processor verify', (): void => {
  processor.givenConsent(user)
  expect(processor.checkConsent(user)).toBeTruthy()
})

test('negative check', (): void => {
  expect(processor.checkConsent(user)).toBeFalsy()
})

test('check - Consent cannot be given if user is under 18', () => {
  processor.checkAge(user, 17)
  expect(user.consentGiven).toBeFalsy()
})

test('check - A user over 18 can give Consent', () => {
  processor.checkAge(user, 25)
  expect(user.consentGiven).toBeTruthy()
})

test('check - revokeConsent correctly revokes consent', () => {
  processor.checkAge(user, 32)
  expect(user.consentGiven).toBeTruthy()
  processor.revokeConsent(user)
  expect(user.consentGiven).toBeFalsy()
})
