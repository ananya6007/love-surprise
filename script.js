function love() {
    alert("I Love You Forever ❤️");
}

function fireworks() {
    for(let i=0;i<40;i++){
        createFirework();
    }
    alert("You just made me the happiest person alive 💖🎆");
}

function createFirework(){
    const spark = document.createElement("div");
    spark.innerHTML = "✨";
    spark.style.position = "fixed";
    spark.style.left = "50%";
    spark.style.top = "50%";
    spark.style.fontSize = "25px";
    spark.style.animation = "boom 1s ease-out forwards";
    spark.style.setProperty("--x", (Math.random() * 400 - 200) + "px");
    spark.style.setProperty("--y", (Math.random() * 400 - 200) + "px");
    document.body.appendChild(spark);

    setTimeout(()=> spark.remove(),1000);
}

// Floating hearts
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}, 250);

// Slideshow
let images = [
    "/static/images/image 1.jpg",
    "/static/images/image 2.jpg",
    "/static/images/image 3.jpg",
    "/static/images/image 4.jpg",
    "/static/images/image 5.jpg",
    "/static/images/image 6.jpg",
    "/static/images/image 7.jpg",
    "/static/images/image 8.jpg",
    "/static/images/image 9.jpg",
    "/static/images/image 10.jpg",
    "/static/images/image 11.jpg",
    "/static/images/image 12.jpg",
    "/static/images/image 13.jpg",
    "/static/images/image 14.jpg",
    "/static/images/image 15.jpg",
    "/static/images/image 16.jpg",
    "/static/images/image 17.jpg",
    "/static/images/image 18.jpg",
    "/static/images/image 19.jpg",
    "/static/images/image 20.jpg",
    "/static/images/image 21.jpg",
    "/static/images/image 22.jpg",
    "/static/images/image 23.jpg",
    "/static/images/image 24.jpg",
    "/static/images/image 25.jpg",
    "/static/images/image 26.jpg",
    "/static/images/image 27.jpg",
    "/static/images/image 28.jpg",
    "/static/images/image 29.jpg",
    "/static/images/image 30.jpg",
    "/static/images/image 31.jpg",
    "/static/images/image 32.jpg",
    "/static/images/image 33.jpg",
    "/static/images/image 34.jpg",

];

let index = 0;
const slide = document.getElementById("slide");

function changePhoto() {
    index = (index + 1) % photos.length;
    slide.style.opacity = 0;

    setTimeout(() => {
        slide.src = photos[index];
        slide.style.opacity = 1;
    }, 500);
}

setInterval(changePhoto, 2500);
<script>
function startLove(){
document.getElementById("bgm").play();
document.getElementById("startScreen").style.display="none";
}
</script>

