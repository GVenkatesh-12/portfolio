// Initial animation
document.getElementById("switch").classList.add("animate");

//Use jQuery
let switchWords = ["passion", "love", "hobby"];
let switchIndex = 0;
let switchInterval = setInterval(function() {
    const switchElement = document.getElementById("switch");
    // Remove animate class first
    switchElement.classList.remove("animate");
    // Change the text
    switchElement.querySelector("span").innerHTML = switchWords[switchIndex];
    // Add animate class after a small delay to trigger the animation
    setTimeout(() => {
        switchElement.classList.add("animate");
    }, 50);
    
    switchIndex++;
    if (switchIndex >= switchWords.length) {
        switchIndex = 0;
    }
}, 2500);

// Play sound on button click
$(".btn").click(function() {
    const audio = new Audio("./assets/audio/click.mp3");
    audio.play();
});


