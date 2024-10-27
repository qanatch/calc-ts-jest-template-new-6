import { UserEstonia } from './user-estonia'
import { UserLatvia } from './user-latvia'

export class Contract {
  title: string
  signed: boolean

  constructor(title: string) {
    this.title = title
    this.signed = false
  }

  signEstonia(user: UserEstonia): boolean {
    if (user.mobileIDAuthorization === true) {
      this.signed = true
      return true
    } else {
      return false
    }
  }

  signLatvia(user: UserLatvia): boolean {
    if (user.activateEParakstsForLatvia === true) {
      this.signed = true
      return true
    } else {
      return false
    }
  }
}
