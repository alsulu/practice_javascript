function show() {
    switch(document.getElementById('breed').value)
    {
        case "grey": document.body.style.backgroundColor = "grey"; break;
        case "white": document.body.style.backgroundColor = "white"; break;
        case "yellow": document.body.style.backgroundColor = "yellow"; break;
        case "green": document.body.style.backgroundColor = "green"; break;
        case "blue": document.body.style.backgroundColor = "blue"; break;
    }
}