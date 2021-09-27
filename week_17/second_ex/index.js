function add() {
    let comment1 = checkSpam();
    document.getElementById("comments").innerHTML += `<p>Аноним</p>`;
    document.getElementById("comments").innerHTML += `<p>${comment1}</p>`;
    document.getElementById("comments").innerHTML += `<hr>`;
}

function checkSpam() {
    let added_comment = document.getElementById("text").value.toLowerCase();
    let fixed_comment;
    if (added_comment.indexOf("viagra") === -1 && added_comment.indexOf("xxx") === -1)
    //или added_comment.includes("viagra")
        fixed_comment = added_comment;
    else
        fixed_comment = added_comment.replace(/viagra|xxx/g, "***");
    return fixed_comment;
}