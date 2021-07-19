function hello() {
    let yourName = document.getElementById('yourName').value;
    document.getElementById('hello').innerHTML = "Здравствуйте, " + yourName + "!";
}