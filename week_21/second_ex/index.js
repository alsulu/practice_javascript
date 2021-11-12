let button = document.getElementsByClassName("button")[0];

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

button.onclick = function(event) {
    event.preventDefault();

    let inputs = document.querySelectorAll("input");
    const number = document.getElementById("number");
    let err = 0;

    for (let i = 0; i < document.getElementsByClassName("rules").length; i++) {
        errors = "";

        if (inputs[i] === number[0] && inputs[i].value !== "")
            inputs[i].setAttribute("required", "true")
        else if (inputs[i] === number[0] && inputs[i].value === "") {
            inputs[i].required = false;
            err++;
        }

        if (inputs[i] === document.getElementById("password-again") && inputs[i-1].validity.valid)
            if (inputs[i].value !== inputs[i-1].value)
                errors = "Пароли не совпадают";

        checkValidity(inputs[i]);

        showError(i);

        if (!errors)
            err ++;
    }
    if (err === 9)
        post();
}

function showError(index) {
    const rules = document.getElementsByClassName("rules");
    rules[index].innerHTML = errors;
    rules[index].style.color = "red";
}

function post() {
    let name = document.getElementById("name").value.toLowerCase();
    let surname = document.getElementById("surname").value.toLowerCase();
    let user = {
        name: name[0].toUpperCase() + name.slice(1),
        surname: surname[0].toUpperCase() + surname.slice(1),
        password: document.getElementById("password").value,
        phone: document.getElementById("number").value,
        dayBirth: document.getElementById("day").value,
        monthBirth: document.getElementById("month").value,
        yearBirth: document.getElementById("year").value,
        sex: document.querySelector(".sex:checked").value
    }
    fetch("https://httpbin.org/post",
    {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
    })
    .then(response => response.json())
    .then(user => console.log(user))
    .catch(error => console.log(error))
}