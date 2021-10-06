class Cat {
    constructor(name, sex, breed, feed) {
        this.name = name;
        this.sex = sex;
        this.breed = breed;
        this.feed = feed;
    }
}

function getInfo() {
    let isValid = true;
    for (elem of document.querySelectorAll(":required"))
        if (!elem.value && !elem.checked && !elem.selected)
            isValid = false;
    if (isValid) {
        let name = document.getElementById("nickname").value;
        let sex = document.querySelector(".sex:checked").value;
        let breed = document.getElementById("breed").options[document.getElementById("breed").selectedIndex].value;
        let feed = document.querySelector(".feed:checked").value;;
    
        let cat = new Cat(name, sex, breed, feed);
        console.log(cat);
        document.getElementsByTagName("button")[0].type = "button";
        }
}
