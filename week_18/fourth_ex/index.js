let allNotes = [];
let myNotes = document.getElementById("myNotes");

document.addEventListener("DOMContentLoaded", function(event) {
    let notes = localStorage.getItem("notes");
    if (notes) {
        allNotes = notes.split(";");
        for (let note of allNotes) {
            myNotes.innerHTML += `<p>&#9825 ${note}</p><hr>`
        }
    }
});

function addMe() {
    let error = document.getElementById("error");
    error.innerHTML = "";
    let note = document.getElementById("new").value;
    let isValid = check(note);
    if (isValid) {
        allNotes.push(note);
        localStorage.setItem("notes", allNotes.join(";"));
        myNotes.innerHTML += `<p>&#9825 ${note}</p><hr>`
        document.getElementById("new").value = "";
    }
    else
        error.innerHTML = "Заметка не может быть пустой и содержать символ \";\"";
        error.style.color = "red";
}

function check(note) {
    if (note && !note.includes(";"))
        return true;
}