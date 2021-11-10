document.addEventListener("DOMContentLoaded", function(event) {
    let superHeroes = JSON.parse(superHeroesJSON);
    for (let hero of superHeroes) {
        let text = 
            `<div class="superHero">
                <img src="${hero.image}">
                <h2>${hero.name}</h2>
                <p><span class="name">Вселенная:</span> ${hero.university}</p>
                <p><span class="name">Альтер-эго:</span> ` + ((hero.alterEgo) ? hero.alterEgo : "нет, полное имя: " + hero.fullName) + `</p>
                <p><span class="name">Род деятельности:</span> ${hero.work.join(", ")}</p>
                <p><span class="name">Друзья:</span> ${hero.friends.join(", ")}</p>
                <p><span class="name">Суперспособности:</span> ${hero.superPowers.join(", ")}</p>
                <p class="description"><span class="name">Описание:</span> ${hero.description.replace(/%/g, "<br><br>")}</p>
                <div class="rating-area" data-rat="${hero.id}" onchange="rating(event)">
                    <input type="radio" id="${hero.id}star-5" name="${hero.id}rating" value="5">
                    <label for="${hero.id}star-5" title="Оценка «5»"></label>	
                    <input type="radio" id="${hero.id}star-4" name="${hero.id}rating" value="4">
                    <label for="${hero.id}star-4" title="Оценка «4»"></label>    
                    <input type="radio" id="${hero.id}star-3" name="${hero.id}rating" value="3">
                    <label for="${hero.id}star-3" title="Оценка «3»"></label>  
                    <input type="radio" id="${hero.id}star-2" name="${hero.id}rating" value="2">
                    <label for="${hero.id}star-2" title="Оценка «2»"></label>    
                    <input type="radio" id="${hero.id}star-1" name="${hero.id}rating" value="1">
                    <label for="${hero.id}star-1" title="Оценка «1»"></label>
                </div>
            </div>`;
        document.getElementsByTagName("main")[0].innerHTML += text;
        let rating = localStorage.getItem(`${hero.id}rating`);
            if (rating)
                document.getElementById(`${hero.id}star-${rating}`).setAttribute("checked", true);
    }
})


function rating(event) {
    let rate = event.target.value;
    localStorage.setItem(`${event.currentTarget.dataset.rat}rating`, rate);
}