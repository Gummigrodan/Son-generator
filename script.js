const images = Array.from(
    { length: 50 },
    (_, i) => `reddit_images/${i + 1}.webp`
);


function randomizeImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const imgElement = document.getElementById("randomImage");

    imgElement.src = images[randomIndex];
}

randomizeImage();
