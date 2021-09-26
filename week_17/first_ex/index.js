let surname;
let first_name;
let patronymic;

function reform() {
    let full_name = document.getElementById("full_name").value.replace(/\s+/g, " ").trim();
    let name_array = full_name.split(" ");
    for (let i = 0; i < name_array.length; i++) {
        let name = name_array[i].toLowerCase();
        document.getElementsByClassName("name")[i].value = name[0].toUpperCase() + name.slice(1);
    }
    surname = document.getElementById("surname").value;
    first_name = document.getElementById("first_name").value;
    patronymic = document.getElementById("patronymic").value;
}