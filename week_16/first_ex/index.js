function sumInput() {
    let numbers = [];
    let sum = 0;
    for(;;) {
        let one = +prompt("Введите число");
        if (one == "" || isNaN(one) || !one) 
            break; 
        //сортировка:
        if (numbers.length == 0) 
            numbers.push(one);
        else if (one >= numbers[numbers.length-1]) 
            numbers.push(one);
        else if (one <= numbers[0])
            numbers.unshift(one);
        else 
            for (let i = 0; i < numbers.length-1; i++)
                if  (one >= numbers[i] && one <= numbers[i+1]) {
                    let more = [];
                    for (let k = i+1; k < numbers.length; k++) 
                        more.push(numbers[k]);
                    numbers[i+1] = one;
                    numbers.length = i+2;
                    numbers.push(more);
                    break;
                }
        sum += one;
    }
    alert(`Массив: ${numbers}`);
    return sum;
}