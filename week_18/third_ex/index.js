document.addEventListener("DOMContentLoaded", function(event) {
    let name = localStorage.getItem('name');
    let avatar = localStorage.getItem('avatar');

    if (name) {
        document.getElementById("author").value = name;
    }

    if (avatar) {
        document.getElementById("photo").src = avatar;
    }
});

function fileSelected(event) {
    let fileImg = event.target.files[0];
    let reader = new FileReader();

    let image = document.getElementById("photo");
    image.title = fileImg.name;

    reader.onload = function (event) {
        image.src = event.target.result;
    }

    reader.readAsDataURL(fileImg);
}

function add() {
    let comment = checkSpam();
    let author = document.getElementById("author").value;
    let image = document.getElementById("photo");
    let name = localStorage.getItem('name');
    let avatar = localStorage.getItem('avatar');

    let canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    let ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0, image.width, image.height);
    let imgURL = canvas.toDataURL("image/png");

    if (author && comment) {
        if (name !== author)
        localStorage.setItem('name', author);
    
        if (!avatar || avatar !== imgURL)
            localStorage.setItem('avatar', imgURL);
    
        document.getElementById("comments").innerHTML += `<div class="one-comment"> <img src="${localStorage.avatar}"> <p class="name">${localStorage.name}: </p> <p class="comment">${comment}</p> </div>`;
    }
}

function checkSpam() {
    let comment = document.getElementById("text").value
    if (comment) {
        let added_comment = comment.toLowerCase();
        let fixed_comment;
        if (added_comment.indexOf("viagra") === -1 && added_comment.indexOf("xxx") === -1)
        //или added_comment.includes("viagra")
            fixed_comment = added_comment;
        else
            fixed_comment = added_comment.replace(/viagra|xxx/g, "***");
        return fixed_comment;
    } 
}
