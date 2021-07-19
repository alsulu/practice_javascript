let a, b, c;

function value() {
    a = document.getElementById('first-number').value;
    b = document.getElementById('second-number').value;
}

function sum() {
    value();
    c = Number(a)+Number(b);
    return c;
}

function sub() {
    value();
    c = a-b;
    return c;
}

function mult() {
    value();
    c = a*b;
    return c;
}

function div() {
    value();
    c = a/b;
    return c;
}

function result() {
    document.getElementById('result').innerHTML += c;
}