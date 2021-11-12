let errors;

function checkValidity(input) {
    let validity = input.validity;
    if (validity.valueMissing) {
        errors = 'Поле "' + input.placeholder + '" не заполнено';
    }
    if (validity.patternMismatch || validity.typeMismatch || validity.badInput) {
        errors = `Неверный формат заполнения поля "${input.placeholder}"`;
    }
    if (validity.rangeOverflow) {
        let max = input.getAttribute('max');
        errors = 'Введите значение меньше ' + max;
    }
    if (validity.rangeUnderflow) {
        let min = input.getAttribute('min');
        errors = 'Введите значение больше ' + min;
    }
    if (validity.tooLong) {
        errors = `Превышено максимальное количество символов в поле "${input.placeholder}"`;
    }
    if (validity.tooShort) {
        errors = `Слишком маленькая длина поля "${input.placeholder}"`;
    }
}

function checkAll() {
    let inputs = document.querySelectorAll("input");
    const number = document.getElementById("number");

    for (let i = 0; i < document.getElementsByClassName("rules").length; i++) {
        errors = "";

        if (inputs[i] === number[0] && inputs[i].value !== "")
            inputs[i].setAttribute("required", "true")
        else if (inputs[i] === number[0] && inputs[i].value === "")
            inputs[i].required = false;

        if (inputs[i] === document.getElementById("password-again") && inputs[i-1].validity.valid)
            if (inputs[i].value !== inputs[i-1].value)
                errors = "Пароли не совпадают";

        checkValidity(inputs[i]);

        showError(i);
    }
}

function showError(index) {
    const rules = document.getElementsByClassName("rules");
    rules[index].innerHTML = errors;
    rules[index].style.color = "red";
}