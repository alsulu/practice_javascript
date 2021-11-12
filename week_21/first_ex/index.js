function onSearch() {
    let gifName = document.getElementById("search").value;
    fetch("https://api.giphy.com/v1/gifs/search?api_key=h4iGNa6sTrHwZg9yNTYOw76AOgYReaFm&limit=5&q=" + gifName)
        .then(response => response.json())
        .then(content => {
            short = content.data.map(item => new Gif(item.images.fixed_height_small.url, item.images.original.url))
            console.log(short);
            let out = "";
            for (i = 0; i < content.data.length; i++) 
                out += `<img src=${short[i].src} class="gifs" onclick="short[${i}].sizeChange(event)">`;
            document.getElementsByClassName("result")[0].innerHTML = out;
        })
        .catch(error => console.log(error))
}

let short;

class Gif {
    constructor(small, original, src) {
        this.small = small;
        this.original = original;
        this.src = small;
    }
    sizeChange(event) {
        if (this.src === this.small)
            this.src = this.original;
        else
            this.src = this.small;
        event.target.setAttribute("src", this.src);
    }
}