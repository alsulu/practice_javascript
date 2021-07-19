function check ()
{
    let count = 0;
    if (document.getElementById("name").value == "" || document.getElementById("surname").value == "") {
        document.getElementById("name-rule").innerHTML = "Укажите полное имя";
        document.getElementById("name-rule").style.color = "red";
        document.getElementById("name-rule").style.margin = "0 0 15px 0";
    }
    else {
        document.getElementById("name-rule").innerHTML = "";
        document.getElementById("name-rule").style.margin = "0";
        count++;
    }

    if (document.getElementById("mail").value == '') {
        document.getElementById("email-rule").innerHTML = "Укажите адрес Gmail";
        document.getElementById("email-rule").style.color = "red";
        document.getElementById("email-rule").style.margin = "0 0 15px 0";
    }
    else {
        document.getElementById("email-rule").innerHTML = ""
        document.getElementById("email-rule").style.margin = "0";
        count++;
    }

    if (document.getElementById("password").value == '') {
        document.getElementById("password-rule").innerHTML = "Придумайте пароль";
        document.getElementById("password-rule").style.color = "red";
    }
    else if (document.getElementById("password").value.length < 8 && password.value.length > 0) {
        document.getElementById("password-rule").innerHTML = "Ваш пароль слишком короткий";
        document.getElementById("password-rule").style.color = "red";
    }
    else if (document.getElementById("password").value.length >= 8 && document.getElementById("password").value != document.getElementById("password-again").value) {
        document.getElementById("password-rule").innerHTML = "Пароли не совпадают";
        document.getElementById("password-rule").style.color = "red";
    }
    else {
        document.getElementById("password-rule").innerHTML = "Пароль должен содержать не менее восьми знаков"
        document.getElementById("password-rule").style.color = "gray";
        count++;
    }

    if (document.getElementById("number").value != "" && isNaN(document.getElementById("number").value)) {
        document.getElementById("number-rule").innerHTML = "Номер должен содержать только цифры";
        document.getElementById("number-rule").style.color = "red";
        document.getElementById("number-rule").style.margin = "0 0 15px 0";
    }
    else {
        document.getElementById("number-rule").innerHTML = "";
        document.getElementById("number-rule").style.margin = "0";
        count++;
    }

    if (document.getElementById("day").value == "" || document.getElementById("month").value == "" || document.getElementById("year").value == "") {
        document.getElementById("birthday-rule").innerHTML = "Укажите полную дату рождения";
        document.getElementById("birthday-rule").style.color = "red";
    }
    else if (isNaN(document.getElementById("day").value) || isNaN(document.getElementById("year").value)) {
        document.getElementById("birthday-rule").innerHTML = "День и год рождения должны содержать только цифры";
        document.getElementById("birthday-rule").style.color = "red";
    }
    else {
        document.getElementById("birthday-rule").innerHTML = "Дата рождения"
        document.getElementById("birthday-rule").style.color = "gray";
        count++;
    }

    if (document.getElementsByName("sex")[0].checked === false && document.getElementsByName("sex")[1].checked === false && document.getElementsByName("sex")[2].checked === false) {
        document.getElementById("sex-rule").innerHTML = "Укажите Ваш пол";
        document.getElementById("sex-rule").style.color = "red";
    }
    else {
        document.getElementById("sex-rule").innerHTML = "Пол";
        document.getElementById("sex-rule").style.color = "gray";
        count++;
    }

    if (count == 6)
        return `Добро пожаловать, ${document.getElementById("name").value}!`;
}