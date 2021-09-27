function gen_random() {
    let array = [];
    let result = "";
    let sum = 0;
    let mult = 1;
    for (let i = 0; i < 10; i++) {
        let number = Math.round(Math.random()*20 - 10);
        array.push(number);
        sum += number;
        mult *= number;
    }
    result += `<p>Сгенерировали: ${array.join(" ")}</p>`

    result += `<p>Минимальное: ${Math.min.apply(null, array)}</p>`

    result += `<p>Максимальное: ${Math.max.apply(null, array)}</p>`

    result += `<p>Среднее арифметическое: ${sum/array.length}</p>`

    result += `<p>Сумма чисел: ${sum}</p>`

    result += `<p>Произведение чисел: ${mult}</p>`

    document.getElementById("result").innerHTML = result;
}