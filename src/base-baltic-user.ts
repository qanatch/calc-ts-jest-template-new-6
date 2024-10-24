export class BaseBalticUser{
    name: string
    surname: string
    age: number
    personalCode: number
    phone: string
    address: string

    constructor(name: string, surname: string, age: number, personalCode: number, phone: string, address: string) {
        this.name = name
        this.surname = surname
        this.age = age
        this.personalCode = personalCode
        this.phone = phone
        this.address = address
       }
}