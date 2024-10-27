import {UserEstonia} from "./user-estonia";
import {UserLatvia} from "./user-latvia";

export class KycVerification {

    activateMobileIDForEstonia(user: UserEstonia): void {
        if (user.age < 16) {
            throw new Error('User is too young')
        } else {
            user.mobileIDAuthorization = true
        }
    }

    activateEParakstsForLatvia(user: UserLatvia): void {
        if (user.age < 18) {
            throw new Error('User is too young')
        } else {
            user.activateEParakstsForLatvia = true
        }
    }
}