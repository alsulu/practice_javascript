class Validator {
    constructor(email, domain, date, phone) {
        this.email = email;
        this.domain = domain;
        this.date = date;
        this.phone = phone;
    }
    isEmail () {
        let regexp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/i;
        return regexp.test(this.email);
    }
    isDomain () {
        let regexp = /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/i;
        return regexp.test(this.domain);
    }
    isDate () {
        let regexp = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
        return regexp.test(this.date);
    }
    isPhone () {
        let regexp = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
        return regexp.test(this.phone);
    }
}

let validator = new Validator('alisa@mail.ru', 'itgirlschool.ru', '12.05.2021', '+7(910)123-45-67');
console.log(validator.isEmail());
console.log(validator.isDomain());
console.log(validator.isDate());
console.log(validator.isPhone());


class ValidatorStatic {
    static isEmail (str) {
        let regexp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/i;
        return regexp.test(str);
    }
    static isDomain (str) {
        let regexp = /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/i;
        return regexp.test(str);
    }
    static isDate (str) {
        let regexp = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
        return regexp.test(str);
    }
    static isPhone (str) {
        let regexp = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
        return regexp.test(str);
    }
}

console.log(ValidatorStatic.isEmail('alisa@mail.ru'));
console.log(ValidatorStatic.isDomain('itgirlschool.ru'));
console.log(ValidatorStatic.isDate('12.05.2021'));
console.log(ValidatorStatic.isPhone('+7(910)123-45-67'));