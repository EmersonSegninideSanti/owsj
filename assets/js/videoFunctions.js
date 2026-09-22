// video-display é a caixa do <iframe>
// main-content-layout é <main>, caixa das duas colunas
function setVideoDisplayPosition() {
    if (window.innerWidth > (window.innerHeight + 130)) {
        document.querySelector(".video-display").classList.add("video-display-lg")
        document.querySelector(".video-button-container").classList.add("video-button-container-lg")
        document.querySelector(".main-layout").classList.add("main-layout--two-cols")
} else {
        document.querySelector(".video-display").classList.remove("video-display-lg")
        document.querySelector(".video-button-container").classList.remove("video-button-container-lg")
        document.querySelector(".main-layout").classList.remove("main-layout--two-cols")
        document.querySelector(".video-display").classList.add("video-display-lg");
        document.querySelector(".video-button-container").classList.add("video-button-container-lg");
        document.querySelector(".main-content-layout").classList.add("main-content-layout--two-cols");
    }else {
        document.querySelector(".video-display").classList.remove("video-display-lg");
        document.querySelector(".video-button-container").classList.remove("video-button-container-lg");
        document.querySelector(".main-content-layout").classList.remove("main-content-layout--two-cols");
    }
}
// video-button-content-box, faz aparecer o video-display
function toggleVideo() {
    if (!button) {
        //Tornar o Vídeo ATIVO     / Vira botão Ocultar
        document.querySelector(".video-display").classList.add("active");
        setVideoDisplayPosition();
        button = true;
        
        document.querySelector(".video-button-container").style.bottom = "0px";
        document.querySelector(".video-button").innerText = "Ocultar Vídeo";
        document.querySelector(".yt-icon").style.display = "none";
    }else {
        //Tornar o Vídeo DESATIVO     / Vira botão Mostrar
        document.querySelector(".video-display").classList.remove("active");
        document.querySelector(".main-content-layout").classList.remove("main-content-layout--two-cols");
        button = false;

        document.querySelector(".video-button-container").style.bottom = "35px";
        document.querySelector(".video-button").innerText = "Mostrar Vídeo";
        document.querySelector(".yt-icon").style.display = "flex";
    }
}

let button = true;
// atribuicao dos eventos
document.querySelector(".video-bottom-content-box").addEventListener('click', toggleVideo);
window.addEventListener('load', setVideoDisplayPosition);
window.addEventListener('resize', ()=>{if (button){setVideoDisplayPosition()}});