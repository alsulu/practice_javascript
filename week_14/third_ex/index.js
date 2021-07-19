let image = document.getElementsByTagName('img');

const firstImage = "https://fragrancetoday.com/wp-content/uploads/2019/03/sean-o-406693-unsplash-e1552651208911.jpg";
const secondImage = "https://www.afisha.uz/ui/materials/2018/05/0535574_b.jpeg";

function back () {
    image[0].src = firstImage;
}

function next () {
    image[0].src = secondImage;
}