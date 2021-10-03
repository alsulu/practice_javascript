function add() {
    let comment1 = checkSpam();
    if (comment1) {
        document.getElementById("comments").innerHTML += `<p class="name">Аноним</p>`;
        document.getElementById("comments").innerHTML += `<p class="comment">${comment1}</p>`;
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