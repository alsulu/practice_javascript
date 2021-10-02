let errors = [];
function checkValidity(input) {
    let validity = input.validity;
    if (validity.valueMissing) {
        errors.push('Поле "' + input.placeholder + '" не заполнено');
    }
    if (validity.patternMismatch) {
        errors.push(`Неверный формат заполнения поля "${input.placeholder}"`);
    }
    if (validity.rangeOverflow) {
        let max = input.getAttribute('max');
        errors.push('Для регистрации Вы должны быть не младше 14 лет');
    }
    if (validity.rangeUnderflow) {
        let min = input.getAttribute('min');
        errors.push('Для регистрации Вы должны быть не старше 110 лет');
    }
}

function checkAll() {
    let inputs = document.querySelectorAll("input");

    for (let i = 0; i < inputs.length; i++) {
        errors = [];
        checkValidity(inputs[i]);
        document.getElementsByClassName("rules")[i].innerHTML = errors.join(', <br>');
        document.getElementsByClassName("rules")[i].style.color = "red";
    }

}

function ValidateEmail(emailField) {
    let mailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if (emailField.value.match(mailFormat)) {
        return true;
    }
    else {
        alert("Ваш адрес электронной почты введен неверно!");
        return false;
    }
}