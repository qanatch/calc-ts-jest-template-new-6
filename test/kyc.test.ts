import { UserEstonia } from '../src/user-estonia'
import { KycVerification } from '../src/kyc-verification'
import { UserLatvia } from '../src/user-latvia'
import { Contract } from '../src/contract'

describe('test KYC for Estonia ', () => {
  let user: UserEstonia
  let kyc: KycVerification
  let contract: Contract

  beforeEach((): void => {
    user = new UserEstonia('Alice', 'Ott', 17, 46658, '+378947852', 'Estonia')
    kyc = new KycVerification()
    contract = new Contract('text')
  })

  test('verify that mobileIDAuthorization field is undefined by default', () => {
    expect(user.mobileIDAuthorization).toBeUndefined()
  })
  test('verify that the activateMobileIDForEstonia method aktivates Mobile ID if the users age is greater than 16', () => {
    kyc.activateMobileIDForEstonia(user)
    expect(user.mobileIDAuthorization).toBe(true)
  })
  test('verify that after attempting to activate Mobile ID for a user younger then 16 trows an error', () => {
    user.age = 15
    expect(() => {
      kyc.activateMobileIDForEstonia(user)
    }).toThrow('User is too young')
  })

  test('verify that contract can not be signed if Mobile Id is not activated', () => {
    user.age = 15
    expect(() => {
      kyc.activateMobileIDForEstonia(user)
    }).toThrow('User is too young')
    expect(contract.signed).toBe(false)
  })

  test('verify that contract is signed after that Mobile Id was activated', () => {
    kyc.activateMobileIDForEstonia(user)
    expect(user.mobileIDAuthorization).toBe(true)
  })

  describe('test KYC for Latvia ', () => {
    let user: UserLatvia
    let kyc: KycVerification
    let contract: Contract

    beforeEach((): void => {
      user = new UserLatvia('Alice', 'Ott', 27, 46658, '+378947852', 'Latvia')
      kyc = new KycVerification()
      contract = new Contract('appruved')
    })

    test('verify that  activateEParakstsForLatvia field is undefined by default', () => {
      expect(user.activateEParakstsForLatvia).toBeUndefined()
    })
    test('verify that the activateMobileIDForEstonia method aktivates Mobile ID if the users age is greater than 16', () => {
      kyc.activateEParakstsForLatvia(user)
      expect(user.activateEParakstsForLatvia).toBe(true)
    })

    test('verify that after attempting to activate EParcasts for a user younger then 18 trows an error', () => {
      user.age = 15
      expect(() => {
        kyc.activateEParakstsForLatvia(user)
      }).toThrow('User is too young')
    })
    test('verify that contract can not be signed if Mobile Id is not activated', () => {
      user.age = 15
      expect(() => {
        kyc.activateEParakstsForLatvia(user)
      }).toThrow('User is too young')
      expect(contract.signed).toBe(false)
    })

    test('verify that contract is signed after that Mobile Id was activated', () => {
      kyc.activateEParakstsForLatvia(user)
      expect(user.activateEParakstsForLatvia).toBe(true)
    })
  })
})
