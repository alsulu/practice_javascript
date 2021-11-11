document.addEventListener("DOMContentLoaded", function(event) {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(posts => {
            let numb = 1;
            for (let post of posts) {
                if (post.userId === numb) {
                    document.getElementsByClassName("posts")[0].innerHTML += 
                        `<button onclick="openPosts(${numb})"><h2>Posts by user no.${numb}</h2></button>
                        <div class="posts-${numb}" hidden>
                        </div>`;
                    numb++;
                }
                let out =
                    `<div class="post">
                        <h3 class="titles">${post.title}</h3>
                        <p class="bodies">${post.body}</p>
                    </div>`;
                document.getElementsByClassName("posts-" + (numb-1))[0].innerHTML += out;
            }
        })
        .catch(error => console.log(error))
})

function openPosts(which) {
    let post = document.getElementsByClassName(`posts-${which}`)[0];
    if (post.hidden) 
        post.hidden = false;
    else 
        post.hidden = true;
}