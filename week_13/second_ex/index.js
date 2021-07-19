let a, b;

function value() {
    a = prompt('Введите первое число:');
    b = prompt('Введите второе число:');
}

function sum() {
    value();
    return(Number(a)+Number(b));
}

function sub() {
    value();
    return(a-b);
}

function mult() {
    value();
    return(a*b);
}

function div() {
    value();
    return(a/b);
}