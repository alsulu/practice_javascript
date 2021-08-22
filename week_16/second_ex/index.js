const volumePrice = [150, 200, 250, 300];
const powerPrice = [250, 350, 450];
const fuelRadio = document.getElementsByName("fuel");
const ageRadio = document.getElementsByName("car-age");
const powerInput = document.getElementById("power");
const volumeInput = document.getElementById("volume");
let count = [];

for (let radio of fuelRadio)
    radio.setAttribute("disabled", "disabled");

for (let radio of ageRadio)
    radio.setAttribute("disabled", "disabled");


/*function count(event) {
    result += Number(event.target.value);
}*/

function selectBrand(sender) {
    const modelSelect = document.getElementById("models");

    if (sender.options[sender.selectedIndex].value !== "none")
        modelSelect.disabled = false;

    let optionsString = `<option value="none" disabled selected hidden>Выберите модель</option>`;

    if (sender.options[sender.selectedIndex].value == "audi") 
        for (let model of audiModels)
            optionsString += `<option value="${model.price}">${model.name}</option>`;

    if (sender.options[sender.selectedIndex].value == "honda") 
        for (let model of hondaModels)
            optionsString += `<option value="${model.price}">${model.name}</option>`;

    if (sender.options[sender.selectedIndex].value == "suzuki") 
        for (let model of suzukiModels)
            optionsString += `<option value="${model.price}">${model.name}</option>`;

    if (sender.options[sender.selectedIndex].value == "volvo") 
        for (let model of volvoModels)
            optionsString += `<option value="${model.price}">${model.name}</option>`;

    modelSelect.innerHTML = optionsString;
}

function selectModel(event) {
    if (event.target.value !== "none")
        for (let radio of fuelRadio)
            radio.disabled = false;

    count[0] = Number(event.target.value);
}

function selectFuel(event) {
    if (event.target.checked === false) 
        volumeInput.hidden = true;
    else if (document.getElementById("electic").checked) {
        volumeInput.hidden = true;
        powerInput.disabled = false;
        count[2] = 0;
    }
    else {
        volumeInput.hidden = false;
        powerInput.disabled = true;
    }

    count[1] = Number(event.target.value);
}

function selectVolume(event) {
    if (event.target.value !== "" && isNaN(event.target.value) == false) 
        powerInput.disabled = false;
    else
        powerInput.disabled = true;

    if (event.target.value < 1000)
        count[2] = volumePrice[0];
    else if (event.target.value >= 1000 && event.target.value < 2000)
        count[2] = volumePrice[1];
    else if (event.target.value >= 2000 && event.target.value < 3000)
        count[2] = volumePrice[2];
    else
        count[2] = volumePrice[3];
}

function selectPower(event) {
    if (event.target.value !== "" && isNaN(event.target.value) == false) 
        for (let radio of ageRadio)
            radio.disabled = false;
    else
        for (let radio of ageRadio)
            radio.disabled = true;

    if (event.target.value <= 100)
        count[3] = +powerPrice[0];
    else if (event.target.value > 100 && event.target.value < 200)
        count[3] = +powerPrice[1];
    else
        count[3] = +powerPrice[2];
}

function selectAge(event) {
    if (event.target.checked !== false) {
        document.getElementById("more").hidden = false;
        document.getElementById("result").disabled = false;
    }

    count[4] = Number(event.target.value);
}

function selectMore(event) {
    if (event.target.checked === true)
        count[5] = Number(event.target.value);
    else 
        count[5] = 0;
}

function resultArray () {
    let result = 0;
    for (item of count)
        result += item;
    return result;
}