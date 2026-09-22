// video-display é a caixa do <iframe>
// main-layout é <main>

function setVideoDisplay () {
    if (window.innerWidth > (window.innerHeight + 130)) {
        document.querySelector(".video-display").classList.add("video-display-lg")
        document.querySelector(".video-button-container").classList.add("video-button-container-lg")
        document.querySelector(".main-layout").classList.add("main-layout--two-cols")
} else {
        document.querySelector(".video-display").classList.remove("video-display-lg")
        document.querySelector(".video-button-container").classList.remove("video-button-container-lg")
        document.querySelector(".main-layout").classList.remove("main-layout--two-cols")
    }
}

// Faz isto funcionar
function toggleVideo (){
    if (videoIsDisplayed) {
        document.querySelector(".video-display").classList.remove("active")
        document.querySelector(".main-layout").classList.remove("main-layout--two-cols")
        videoIsDisplayed = false;
    } else {
        document.querySelector(".video-display").classList.add("active")
        setVideoDisplay();
        videoIsDisplayed = true
    }
}

window.addEventListener( 'load' , setVideoDisplay)
window.addEventListener( 'resize', setVideoDisplay)
videoIsDisplayed = true
// atribuicao do evento